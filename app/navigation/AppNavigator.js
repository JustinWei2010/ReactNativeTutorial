'use strict'
import React, { Component } from 'react'
import { BackAndroid, Navigator, StyleSheet, Text } from 'react-native'
import EventDetailsScreen from 'screens/EventDetailsScreen'
import HomeScreen from 'screens/HomeScreen'
import LoginScreen from 'screens/LoginScreen'

var _navigator // global navigator variable

export default class AppNavigator extends Component {

    _renderScene(route, navigator) {
        _navigator = navigator // set for android back callback
        var globalNavigatorProps = { navigator }

        switch(route.ident) {
            case "Login":
                return (
                    <LoginScreen
                        {...globalNavigatorProps} />
                )

            case "Home":
                return (
                    <HomeScreen
                        {...globalNavigatorProps} />
                )

            case "EventDetails":
                return (
                    <EventDetailsScreen
                        {...globalNavigatorProps}
                        event={route.details} />
                )

            default:
                return (
                    <Text>{`No page defined, internal error ${route}`}</Text>
                )
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={this.props.initialRoute}
                ref="appNavigator"
                renderScene={this._renderScene}/>
        )
    }

}

// Callback for popping back stack when back button is pressed on android
BackAndroid.addEventListener("hardwareBackPress", function() {

    // If on first screen and back is pressed then exit app
    if (_navigator.getCurrentRoutes().length === 1) {
        return false
    }
    _navigator.pop()
    return true

});