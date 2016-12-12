'use strict'
import React, { Component } from 'react'
import { ListView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MainToolBar from '../components/MainToolBar'
import ViewContainer from '../components/ViewContainer'

const events = {
    "Current Events": [
        {id: "1", title: "Skii Trip", date: "12/07", location: "Tahoe"},
        {id: "2", title: "Bar Drinking", date: "12/07", location: "Capitol Hill"},
        {id: "3", title: "Karoake", date: "12/07", location: "International District"}
    ],
    "Upcoming Events": [
        {id: "4", title: "Shiro's", date: "12/08", location: "Downtown"},
        {id: "5", title: "Board Game Night", date: "12/09", location: "Insignia"},
        {id: "6", title: "Sky Diving", date: "12/09", location: "Sky"}
    ]
}

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        var dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        })
        this.state = { dataSource: dataSource.cloneWithRowsAndSections(events) };
    }

    _renderEventSectionHeader(sectionData, section) {
        return (
            <View style={styles.eventSection}>
                <Text style={styles.eventSectionText}>{section}</Text>
            </View>
        )
    }

    _renderEventRow(details) {
        return (
            <TouchableOpacity style={styles.eventRow} onPress={(event) => this._navigateToEventDetails(details)}>
                <Text style={styles.eventRowText}>{details.title}</Text>
                <Text style={styles.eventRowText}>{details.date}</Text>
                <Text style={styles.eventRowText}>{details.location}</Text>
            </TouchableOpacity>
        )
    }

    _navigateToEventDetails(details) {
        this.props.navigator.push({
            ident: "EventDetails",
            details
        })
    }

    render() {
        return (
            <ViewContainer>
                <MainToolBar />
                <View style={styles.main_container}>
                <ListView
                    style={styles.current_events}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderEventRow.bind(this)}
                    renderSectionHeader={this._renderEventSectionHeader} />
                </View>
            </ViewContainer>
        )
    }

}

const styles = StyleSheet.create({

    main_container: {
        flex: 1,
        backgroundColor: "#F6F7F8",
    },

    eventSection: {
        flexDirection: 'column',
        backgroundColor: '#2196F3',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 6
    }, 

    eventSectionText: {
        fontSize: 16,
        color: 'white'
    },

    eventRow: {
        paddingVertical: 20,
        paddingLeft: 16,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderBottomColor: '#E0E0E0',
        borderWidth: 1
    },

    eventRowText: {
        color: '#212121',
        fontSize: 16
    }


});

module.exports = HomeScreen