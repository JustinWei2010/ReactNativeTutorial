'use strict'
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import AppNavigator from './app/navigation/AppNavigator'

class ReactNativeTutorial extends Component {

    render() {
        return (
            <AppNavigator 
                initialRoute={{ ident: "Home" }} />
        )
    }

}

AppRegistry.registerComponent('ReactNativeTutorial', () => ReactNativeTutorial)