'use strict'
import React, { Component } from 'react'
import { Navigator, StyleSheet, Text } from 'react-native'
import EventDetailsScreen from '../screens/EventDetailsScreen'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'

class AppNavigator extends Component {

    _renderScene(route, navigator) {
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

module.exports = AppNavigator