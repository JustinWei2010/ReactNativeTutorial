'use strict'
import React, { Component } from 'react'
import { Alert, Text, View } from 'react-native'
import Colors from 'styles/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import PlatformStyleSheet from 'styles/PlatformStyleSheet'

export default class MainToolBar extends Component {

    _refreshPress() {
        Alert.alert("Refresh Events")
    }

    _settingsPress() {
        Alert.alert("Pull Up Setting Options")
    }

    render() {
        return (
            <View style={styles.toolBar}>
                <Text style={styles.toolBarLogo}>ETA Logo</Text>
                <Icon 
                    name="ios-refresh" 
                    size={30} 
                    onPress={this._refreshPress} 
                    style={styles.refreshButton} />
                <Icon 
                    name="ios-settings" 
                    size={30} 
                    onPress={this._settingsPress} 
                    style={styles.settingsButton} />

            </View>
        )
    }

}

const styles = PlatformStyleSheet.create({

    toolBar: {
        backgroundColor: Colors.violetBlue,
        flexDirection: "row",
        alignItems: "center",
        ios: {
            paddingTop: 25
        }
    },

    toolBarLogo: {
        color: "white",
        paddingLeft: 6,           
        flex: 1,
        alignItems:"flex-start",
    },

    refreshButton: {
        paddingRight: 10,
    },

    settingsButton: {
        paddingRight: 6
    }

})