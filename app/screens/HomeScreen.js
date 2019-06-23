/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import colors from './../constants/Colors';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  View,
  Picker,
  TouchableHighlight,
  AsyncStorage,
  Dimensions,
  TextInput
} from 'react-native';


//import components

export default class Home extends Component {
    constructor(props){
      super(props);
      this.state ={
      }
    }
    static navigationOptions = {
      drawerLabel: 'Home',
      header: null,
    };
  
  componentDidMount(){

  }

  render(){
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/earth.jpg')} style={styles.backgroundImage}></Image>
        <View style={styles.image}>     
          <TouchableOpacity>
            <Text onPress = {()=>{
          this.props.navigation.navigate('Game');
          }} style={styles.buttons}>Play Game</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text onPress = {()=>{
          this.props.navigation.navigate('Option');
          }} style={styles.buttons}>Options</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text onPress = {()=>{
          this.props.navigation.navigate('About');
          }} style={styles.buttons}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text onPress = {()=>{
          this.props.navigation.navigate('Res');
          }} style={styles.buttons}>Results</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text onPress = {()=>{
          this.props.navigation.navigate('Rewards');
          }} style={styles.buttons}>Rewards</Text>
          </TouchableOpacity>
          </View>   
      </View>
    );
  }
}
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const styles = StyleSheet.create({
  container: {
    width:width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000036',
  },
  title: {
    fontSize: 20,
    color:'white',
    textAlign: 'center',
    margin: 10,
  },
  backgroundImage:{
    flex:1,
    height: null,
    width:width*1.9,
    alignItems:'center',
    justifyContent:"center",
    resizeMode:'stretch',
  },
  modal:{
    fontSize:24,
    textAlign: 'center',
    margin: 20,
  },
  buttons:{
    margin:10,
    padding:5,
    paddingTop:7,
    paddingBottom:7,
    fontSize:20,
    textAlign:'center',
    color:'white',
    elevation:9,
    width:200,
    backgroundColor: colors.mainColor,
    fontFamily:'Space',
    fontWeight: 'bold'
  },
  butt:{
    backgroundColor: colors.mainColor,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:30,
    paddingRight:30,
    borderRadius:4,
    width:140,
    shadowOffset:{width: 22, height:22},
    shadowColor:'#f6f6f6',
    marginTop:80,
    
  },
  image:{
    position:'absolute'
  },
});
