'use strict'
import React, { Component } from 'react'
import { ListView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import EventDetails from 'components/HomeScreen/EventDetails'
import MainToolBar from 'components/MainToolBar'
import ScreenContainer from 'components/ScreenContainer'
import SectionHeader from 'components/SectionHeader'

const events = {
    "Current Events": [
        {id: "1", host: "Justin Wei", title: "EDC", date: "Wednesday, December 07", time: "7:00 PM", location: "Las Vegas Strip", addressLine1: "3355 S Las Vegas Blvd", addressLine2: "Las Vegas, NV"},
        {id: "2", host: "Nhat Doan", title: "Bar Drinking", date: "Wednesday, December 07", time: "11:00 PM", location: "Capitol Hill", addressLine1: "4508 University Way", addressLine2: "Seattle, WA"},
        {id: "3", host: "Ivan Ma", title: "Karoake", date: "Wednesday, December 07", time: "9:00 AM", location: "International District", addressLine1: "3333 Battery Road", addressLine2: "Seattle, WA"}
    ],
    "Upcoming Events": [
{id: "1", host: "Justin Wei", title: "EDC", date: "Thursday, December 08", time: "7:00 PM", location: "Las Vegas Strip", addressLine1: "3355 S Las Vegas Blvd", addressLine2: "Las Vegas, NV"},
        {id: "2", host: "Nhat Doan", title: "Bar Drinking", date: "Friday, December 09", time: "11:00 PM", location: "Capitol Hill", addressLine1: "4508 University Way", addressLine2: "Seattle, WA"},
        {id: "3", host: "Ivan Ma", title: "Karoake", date: "Friday, December 09", time: "9:00 AM", location: "International District", addressLine1: "3333 Battery Road", addressLine2: "Seattle, WA"}
    ]
}

export default class HomeScreen extends Component {

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
            <SectionHeader
                title={section} />
        )
    }

    _renderEventRow(details) {
        return (
            <TouchableOpacity onPress={(event) => this._navigateToEventDetails(details)}>
                <EventDetails 
                    {...details} />
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
            <ScreenContainer>
                <MainToolBar />
                <View style={styles.mainContainer}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderEventRow.bind(this)}
                        renderSectionHeader={this._renderEventSectionHeader} />
                </View>
            </ScreenContainer>
        )
    }

}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: "#F6F7F8",
    }

});