import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <View style={styles.time}>
          <Text style={styles.quest}>time:
              {"\n"}
              {this.props.time}
          </Text>
          <Text  style={styles.quest}>Questions:
              {"\n"}
              {this.props.index + 1 }/20
          </Text>
      </View>
    )
  }
}
var height = Dimensions.get('window').height; //full width
const styles = StyleSheet.create({
  time:{
    margin:5,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    fontFamily: 'Slabo',
  },
  quest:{
    backgroundColor:'white',
    padding:3,
    margin:4,
    height:height/11,
    width:120,
    textAlign:'center',
    fontSize:20,
    fontFamily: 'Slabo',
  },
})

