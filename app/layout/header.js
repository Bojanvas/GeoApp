import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import colors from './../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class HeaderContainer extends React.Component {

  render() {
      console.log((this.props.user));
    return (
    <View style={styles.headerContainer}>
        <View>
        </View>
        <View style={styles.headerLoggin}>
            <Text>{this.props.user.loggedIn ? 'Hello ' : 'Log In: '}</Text>
            <Text>{this.props.user.user != undefined ? this.props.user.user.email  : ''}</Text>
            <Icon onPress={this.props.LogginHandler} name="google" size={30} color="#000" />
        </View>        
       
    </View>
    )
  }
}

const styles = StyleSheet.create({
    headerContainer: {
        alignSelf: 'stretch',
        textAlign: 'center',
        backgroundColor: colors.mainColor,
    },
    headerLoggin : {
        flex: 1,
        flexDirection: 'row',
    }
  });
  