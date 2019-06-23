import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class Levels extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.modalHolder}>
                {/* s<Text style={styles.modalTxt}>Level :</Text> */}
                <Image source={require('../assets/images/level.png')} style={styles.backgroundImage}></Image>
                <Text allowFontScaling={false} style={styles.level}>{this.props.level}</Text>
            </View>      
        )
    }
}

const styles = StyleSheet.create({
    modalHolder:{
        flex:1,
        // padding:20,
        // height:20,
        flexDirection: 'row',
    },
    modalTxt:{
        marginTop:30,
        paddingLeft:20,
        fontSize:29,
        color:'#ffffff',
        fontFamily: 'Slabo',
    },
    backgroundImage:{
        width:50,
        height:50,
        resizeMode:'stretch',
    },
    level:{
        position:'absolute',
        right:22,
        top:9,
        fontSize:25,
        color:'#000',
        fontFamily: 'Slabo',
    },
})