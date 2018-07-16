import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = '05c8ab8dd48faef8dcdd88d4d3095b98';

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }
  _getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
    })
  };
  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        {isLoaded ? (
          <Weather weatherName={name} temp={Math.floor(temperature - 273.15)}/>
          ) : (
          <View style={styles.loading}>
            <ActivityIndicator style={styles.indicator}/>
            <Text style={styles.loadingText}>Getting the awesome weather...</Text>
            {error ? <Text style={styles.errorText}>error</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end'
  },
  loadingText: {
    fontSize: 30,
    marginBottom: 100,
    marginLeft: 25,
    color: 'white'
  },
  indicator: {
    flex: 1,
    justifyContent: 'center'
  }
});
