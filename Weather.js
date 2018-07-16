import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors: ['#00C6FB', '#005BEA'],
        title: "Raining :D",
        subtitle: "Don't forget to take an umbrella!",
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: "Sunny xD",
        subtitle: "Did you put sunscreen?",
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADF'],
        title: "Thunderstorm xO",
        subtitle: "Lookout for tall trees!",
        icon: 'weather-lightning'
    },
    Clouds: {
        colors: ['#D7D2CC', '#304352'],
        title: "Clouds :)",
        subtitle: "Dark day under clouds",
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: "Snow ;D",
        subtitle: "Do you want to build a snowman?",
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Drizzle ;)",
        subtitle: "Did you have hot cocoa yet?",
        icon: 'weather-hail'
    },
    Haze: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Haze :O",
        subtitle: "Hard to see far away...",
        icon: 'weather-fog'
    },
    Mist: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Mist ;O",
        subtitle: "Moisture atmosphere...",
        icon: 'weather-fog'
    }
}

function Weather({ weatherName, temp }) {
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color='white' size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temp}ºC</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    temp: {
        fontSize: 40,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 25,
        fontWeight: '300'
    }
})