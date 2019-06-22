
import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {Provider} from 'react-redux';
import { GeoApp } from './app/';
import store from './app/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <GeoApp />
      </Provider>
    )
  }
}