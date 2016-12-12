'use strict'
import React, { Component } from 'react'
import { ListView, StyleSheet, Text, View } from 'react-native'
import ETADetails from 'components/EventDetailsScreen/ETADetails'
import EventDetails from 'components/EventDetailsScreen/EventDetails'
import MainToolBar from 'components/MainToolBar'
import ScreenContainer from 'components/ScreenContainer'
import SectionHeader from 'components/SectionHeader'

const etas = [
    {userId: "1", personName: "Justin Wei", etaTime: "Arrived", etaDistance: ""},
    {userId: "2", personName: "Nhat Doan", etaTime: "5 mins", etaDistance: "1.3 mi"},
    {userId: "3", personName: "Ivan Ma", etaTime: "25 mins", etaDistance: "5.4 mi"},
    {userId: "4", personName: "Don Tian", etaTime: "10 mins", etaDistance: "2.8 mi"},
]

export default class EventDetailsScreen extends Component {

    constructor(props) {
        super(props);
        var dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        })
        this.state = { dataSource: dataSource.cloneWithRows(etas) };
    }

    _renderETADetailsRow(etaDetails) {
        return (
            <ETADetails 
                {...etaDetails} />
        )
    }

    render() {
        return (
            <ScreenContainer>
                <MainToolBar />
                <View style={styles.mainContainer}>
                    <SectionHeader 
                        title={this.props.event.title} />
                    <EventDetails 
                        {...this.props.event} />
                    <ListView
                        style={styles.etaDetailsListContainer}
                        dataSource={this.state.dataSource}
                        renderRow={this._renderETADetailsRow} />
                </View>
            </ScreenContainer>
        )
    }

}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: "#F6F7F8",
    },

    etaDetailsListContainer: {
        marginTop: 20,
        marginHorizontal: 16
    }

});