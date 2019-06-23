import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const screens = {
  Home: {
    screen: HomeScreen
  },
  Option: {
    screen: SettingsScreen
  }
}

const config = {
  headerMode: 'none',
  initialRouteName: 'Home'
}

export default createStackNavigator(screens,config);
