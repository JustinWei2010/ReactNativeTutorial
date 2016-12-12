'use strict'
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import AppNavigator from 'navigation/AppNavigator'

class ReactNativeTutorial extends Component {

    render() {
        return (
            <AppNavigator 
                initialRoute={{ ident: "Login" }} />
        )
    }

}

AppRegistry.registerComponent('ReactNativeTutorial', () => ReactNativeTutorial)