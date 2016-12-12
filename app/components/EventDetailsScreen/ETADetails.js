'use strict'
import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

class ETADetails extends Component {

    render() {
        return (
            <View style={styles.etaDetailsContainer}>
                <Image style={styles.profileIcon} source={require('../../resources/profile.png')} />
                <View style={styles.etaTextContainer}>
                    <Text style={styles.personName}>{this.props.personName}</Text>
                    <Text style={styles.etaTime}>{this.props.etaTime}</Text>
                </View>
                <Text>{this.props.etaDistance}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    etaDetailsContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    profileIcon: {
        height: 40,
        width: 40,
        borderRadius: 20
    },

    etaTextContainer: {
        flexDirection: 'column',
        marginLeft: 20,
        flex: 1
    },

    personName: {
        fontSize: 18
    },

    etaTime: {
        fontSize: 12
    }

})

module.exports = ETADetails