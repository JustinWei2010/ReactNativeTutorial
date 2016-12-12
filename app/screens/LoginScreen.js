'use strict'
import React, { Component } from 'react'
import { Navigator, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewContainer from '../components/ViewContainer'

class HomeScreen extends Component {

    _loginWithFacebook() {
        this.props.navigator.push({
            ident: "Home"
        })
    }

    render() {
        return (
            <ViewContainer>
                <View style={styles.main_container}>
                    <View style={styles.logo}>
                        <Text>
                            App Logo
                        </Text>
                    </View>
                    <Icon.Button 
                        name="facebook" 
                        backgroundColor="#3b5998" 
                        onPress={this._loginWithFacebook.bind(this)}>
                        Login with Facebook
                    </Icon.Button>
                </View>
            </ViewContainer>
        )
    }

}

const styles = StyleSheet.create({

    main_container: {
        margin: 30,
        flex: 1
    },

    logo: {
        flex: 1,
        backgroundColor: "#F6F7F8",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    }

});

module.exports = HomeScreen