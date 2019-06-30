import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import colors from './../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import Logo from '../components/logo.js';
import GeoLocation from '../components/geoLocation.js';
import Level from '../components/level.js';

export default class HeaderContainer extends React.Component {

  render() {
      console.log(this.props.user.user);
    return (
    <View style={styles.headerContainer}>
        <View style={styles.safeView}>
        </View>
        <View style={styles.user}>
            <View style={styles.userInfo}>
                <Logo imageName='Geographylogo.png'></Logo>
                <Text style={styles.email}>{this.props.user.user != undefined ? this.props.user.user.email  : ''}</Text>
                {this.props.user.loggedIn  ? (
                    <Level level={this.props.level}  />
                ) : (
                    <View></View>
                )}
                
             </View>  
        </View>
        <View style={styles.icons}>
            {this.props.user.loggedIn  ? (
                <View style={styles.icons}>
                    <Icon style={{paddingRight: 5}} name="sign-out" size={20} color="#fff" />
                    <Text style={styles.logOut} onPress={this.props.LogginOutHandler} >Log Out</Text>
                </View>
            ) : (
                <View style={styles.icons}>
                    <Text style={styles.logIn}>Log In with:  </Text>
                    <Icon onPress={this.props.LogginHandler} name="google-plus" size={30} color="#fff" />
                </View>
            )}
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    headerContainer: {
        padding:10,
        flexDirection: 'row',
        alignSelf: 'stretch',
        textAlign: 'center',
        backgroundColor: colors.mainColor,
        height:70,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userInfo : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    icons : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: "#fff",
    },
    helloMessage : {
        paddingRight: 5,
        fontFamily:'Space'
    },
    safeView : {
        paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    logOut : {
        fontFamily:'Slabo',
        fontWeight: 'bold',
        color: "#fff",
    },
    email : {
        fontFamily:'Slabo',
        fontWeight: 'bold',
        color: "#fff",
    },
    logIn: {
        fontFamily:'Slabo',
        fontWeight: 'bold',
        paddingRight:5,
    }
  });
  