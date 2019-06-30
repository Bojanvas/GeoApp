import React, { Component } from 'react';
import colors from './../constants/Colors';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

export default class Button extends Component {
  render() {
    return (
        <TouchableOpacity>
          <Text
            onPress={(event)=>{ this.props.checkAnswer(this.props.question)}}
            style={styles.button}>
            {this.props.question}
          </Text>
        </TouchableOpacity>
    )
  }
}
var width = Dimensions.get('window').width; //full width
const styles = StyleSheet.create({
  button:{
    width:width/2.5,
    margin:10,
    textAlign:'center',
    fontSize:22,
    backgroundColor:'white',
    color: colors.mainColor,
    padding:5,
    elevation:6,
    fontWeight:'200',
    fontFamily: 'Slabo',

},
})

