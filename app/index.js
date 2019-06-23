import React, { useState, Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
// import Login from './components/login';
import AppNavigator from './navigation/AppNavigator';
import Header from './layout/headerContainer.js';
import Home from './screens/HomeScreen.js'

export class GeoApp extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <Header loggedIn = 'false' />
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
