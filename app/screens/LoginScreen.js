'use strict'
import React, { Component } from 'react'
import { Navigator, StyleSheet, Text, View } from 'react-native'
import Colors from 'styles/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenContainer from 'components/ScreenContainer'

export default class HomeScreen extends Component {

    _loginWithFacebook() {
        this.props.navigator.push({
            ident: "Home"
        })
    }

    render() {
        return (
            <ScreenContainer>
                <View style={styles.mainContainer}>
                    <View style={styles.logo}>
                        <Text>
                            App Logo
                        </Text>
                    </View>
                    <Icon.Button 
                        name="facebook" 
                        backgroundColor={Colors.facebookBlue} 
                        onPress={this._loginWithFacebook.bind(this)}>
                        Login with Facebook
                    </Icon.Button>
                </View>
            </ScreenContainer>
        )
    }

}

const styles = StyleSheet.create({

    mainContainer: {
        margin: 30,
        flex: 1
    },

    logo: {
        flex: 1,
        backgroundColor: Colors.lightGray,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    }

});