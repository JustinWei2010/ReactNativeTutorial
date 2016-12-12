'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class EventDetails extends Component {

    constructor(props) {
        super(props);

        //Initialize details arrays
        this.timeDetails = [
            this.props.date, 
            this.props.time
        ]

        this.locationDetails = [
            this.props.location, 
            this.props.addressLine1, 
            this.props.addressLine2
        ]

        this.hostDetails = [
            `Hosted by ${this.props.host}`
        ]
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <_Details 
                    name="clock-o" 
                    size={30}
                    details={this.timeDetails} />
                <_Details 
                    name="map-marker" 
                    size={30}
                    details={this.locationDetails} />
                <_Details 
                    name="user" 
                    size={30}
                    details={this.hostDetails} />
            </View>
        )
    }

}

class _Details extends Component {

    render() {
        return (
            <View style={styles.detailsContainer}>
                <View style={styles.detailsIconContainer}>
                    <Icon 
                        name={this.props.name}
                        size={this.props.size} />
                </View>
                <View style={styles.detailsTextContainer}>
                    {
                        this.props.details.map(function (item, index) {
                            return <Text style={styles.detailsText} key={index}>{item}</Text>
                        })
                    }
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    mainContainer: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderTopColor: "white",
        borderLeftColor: "white",
        borderRightColor: "white",
        borderBottomColor: "#E0E0E0",
        borderWidth: 1
    },

    detailsContainer: {
        flexDirection: "row"
    },

    detailsIconContainer: {
        flexDirection: "row",
        width: 35,
        justifyContent: "center"
    },

    detailsTextContainer: {
        flexDirection: "column",
        paddingHorizontal: 20,
        paddingBottom: 10
    },

    detailsText: {
        color: '#212121',
        fontSize: 20
    }

});