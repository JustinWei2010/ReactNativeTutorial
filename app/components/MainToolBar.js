'use strict'
import React, { Component } from 'react'
import { Alert, Platform, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

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

const styles = StyleSheet.create({

    toolBar: {
        backgroundColor: '#3F51B5',
        flexDirection: "row",
        alignItems: "center",
        paddingTop: (Platform.OS === 'ios') ? 25 : 0
    },

    toolBarLogo: {
        color: "#fff",
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