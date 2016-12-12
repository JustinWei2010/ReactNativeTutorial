'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from 'styles/Colors'

export default class SectionHeader extends Component {

    render() {
        return (
            <View style={styles.sectionHeaderContainer}>
                <Text style={styles.sectionTitle}>{this.props.title}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    sectionHeaderContainer: {
        flexDirection: 'column',
        backgroundColor: Colors.lightBlue,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 6
    }, 

    sectionTitle: {
        fontSize: 16,
        color: 'white'
    }

})