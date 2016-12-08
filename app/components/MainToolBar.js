'use strict'
import React, { Component } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class MainToolBar extends Component {

    _refreshPress() {
        Alert.alert("Refresh Events")
    }

    _settingsPress() {
        Alert.alert("Pull Up Setting Options")
    }

    render() {
        return (
            <View style={styles.toolbar}>
                <Text style={styles.toolbar_logo}>ETA Logo</Text>
                <Icon 
                    name="ios-refresh" 
                    size={30} 
                    onPress={this._refreshPress} 
                    style={styles.refresh_button} />
                <Icon 
                    name="ios-settings" 
                    size={30} 
                    onPress={this._settingsPress} 
                    style={styles.settings_button} />

            </View>
        )
    }
}

const styles = StyleSheet.create({

    toolbar: {
        backgroundColor: "#81c04d",
        paddingTop: 30,
        flexDirection: "row",
        alignItems: "center"
    },

    toolbar_logo: {
        color: "#fff",
        paddingLeft: 20,           
        flex: 1,
        alignItems:"flex-start",
    },

    refresh_button: {
        paddingRight: 10,
    },

    settings_button: {
        paddingRight: 20
    }

})

module.exports = MainToolBar