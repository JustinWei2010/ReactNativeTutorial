'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class EventDetails extends Component {

    render() {
        return (
            <View style={styles.eventContainer}>
                <Text style={styles.eventText}>{this.props.title}</Text>
                <Text style={styles.eventText}>{this.props.date}</Text>
                <Text style={styles.eventText}>{this.props.time}</Text>
                <Text style={styles.eventText}>{this.props.location}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    eventContainer: {
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderBottomColor: '#E0E0E0',
        borderWidth: 1
    },

    eventText: {
        color: '#212121',
        fontSize: 16
    }

})