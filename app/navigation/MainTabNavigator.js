import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ResultScreen from '../screens/ResultScreen';

const screens = {
  Home: {
    screen: HomeScreen
  },
  Game: {
    screen: GameScreen
  },
  Result: {
    screen: ResultScreen
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
