import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => ({
  ...state.user,
  ...state.game
})

//import components

class Result extends Component {
    constructor(props){
      super(props);
    }
    
    static navigationOptions = {
      drawerLabel: 'Result',
      header: null,
    };
  
  componentDidMount(){

  }

  render(){
    return (
      <View style={styles.container}>
            <Text>Results: {this.props.result}</Text>
      </View>
    );
  }
}
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const styles = StyleSheet.create({

});

export default connect(mapStateToProps, {})(Result);