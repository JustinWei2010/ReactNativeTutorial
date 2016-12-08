'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainToolBar from '../components/MainToolBar'
import ViewContainer from '../components/ViewContainer'

class HomeScreen extends Component {

    render() {
        return (
            <ViewContainer>
                <MainToolBar />
                <View style={styles.main_container}>
                    <Text>
                        Homepage Content
                    </Text>
                </View>
            </ViewContainer>
        )
    }

}

const styles = StyleSheet.create({

    main_container: {
        flex: 1,
        backgroundColor: "#F6F7F8",
        justifyContent: "center",
        alignItems: "center"
    }

});

module.exports = HomeScreen