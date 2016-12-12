'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class SectionHeader extends Component {

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
        backgroundColor: '#2196F3',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 6
    }, 

    sectionTitle: {
        fontSize: 16,
        color: 'white'
    }

})

module.exports = SectionHeader