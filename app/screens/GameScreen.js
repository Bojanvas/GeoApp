import React, { Component } from 'react';
import colors from './../constants/Colors';
import { connect } from 'react-redux';
import gameServices from '../services/game';
import TimerMixin from 'react-timer-mixin';
import Loading from './../components/loading';
import Button from './../components/button';
import Panel from './../components/panel';
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
  TextInput,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager
} from 'react-native';

const mapStateToProps = state => ({
    ...state.game,
    ...state.user
})

const mapDispatchToProps = {
    // newGame: () => createNewGame()
}

//import components
export class Game extends Component {
    constructor(props){
      super(props);
      this.checkAnswer = this.checkAnswer.bind(this);
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
      }
      this.gameServices = new gameServices();
      mixins: [TimerMixin],
      this.state = {
          time:0,
          i: 0,
          points: 0,
          message: '',
      }
    }
    static navigationOptions = {
      drawerLabel: 'Game',
      header: null,
    };

    createNewGame(){
        this.gameServices.newGame().then(this.timeStart());
    }

    checkAnswer (answer) {
        var correct = this.props.game.questions[this.state.i].correctAnswer;
        if (answer == correct ) {
            this.setState({
                mesColor:'#3bf955',
                points: this.state.points + this.props.game.questions[this.state.i].points,
                message: 'Correct answer! :)',
            })
        } else {
            this.setState({
                mesColor:'#8c1c41',
                message:'Wrong answer, Correct answer was: '+correct,
            })
        }
        this.checkIfGameIsOver();
    }

    checkIfGameIsOver () {
        if (this.state.i + 1 == this.props.game.questions.length) {
            clearInterval(this.interval);
            this.gameServices.gameOver(
                    this.state.points,
                    this.state.time,
                    this.props.user._id ? this.props.user._id : '',
                )
                .then(this.props.navigation.navigate('Result', {}));
           
        } else {
            this.setState({
                i: this.state.i + 1,
            })
        }
    }
  
    componentDidMount(){
        this.createNewGame();
    }

    timeStart() {
        this.interval = setInterval(
            // time is thicking 1s
        () => { this.setState({
            time: this.state.time +1,
        }) },
        1000
        );
    }  

    componentWillUnmount(){
        clearInterval(this.interval);
    }

  render(){
    if (this.props.game == null) {
        return (
            <Loading />
        )
    }  else {
        var img = this.props.game.questions[this.state.i] == 'flag' ?
            this.props.game.questions[this.state.i].flag_file_path : this.props.game.questions[this.state.i].country_file_path ;
        return (
            <View style={styles.container}>
             <Image source={require('../assets/images/earth.jpg')} style={styles.backgroundImage}></Image>
                <View style={styles.image}>     
                    <View style={styles.first}>
                        <Image 
                            style={styles.img}
                            source={img}>
                        </Image>
                        <Panel 
                            time={this.state.time}
                            index={this.state.i}
                            total={this.props.game.questions.length} 
                        />
                    </View>
                    <View style={styles.second}>
                        <Text style={{color:this.state.mesColor}}>{this.state.message}</Text>
                        <View style={styles.questions}>
                            <Text style={styles.qu}>{this.props.game.questions[this.state.i].question}</Text>
                        </View>
                        <View style={styles.buttons}>
                            {JSON.parse(this.props.game.questions[this.state.i].answers).map((answer, i) => {     
                                // Return the element. Also pass key
                                return (<Button checkAnswer={this.checkAnswer} key={i} question={answer} />) 
                            })}
                        </View>
                    </View>
                </View>
            </View>
          );
    }

  }
}
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const styles = StyleSheet.create({
  container: {
    height:height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#7c827c",

  },
  first:{
      flex:7,
      alignItems:'center',
      justifyContent:'center',
  },
  second:{
      flex:3,
      alignItems:'center',
      justifyContent:'center',
  },
  img:{
      marginTop:10,
      flex:2,
      width:width/1.1,
      resizeMode:'contain',
    //   backgroundColor: "#7c827c",
  },
  qu:{
        color:'white',
        textAlign:'center',
        fontSize:24,
        fontFamily: 'Slabo',
  },
  answers:{
        flexDirection:'row',
        flex:0,
        marginBottom:10,
        alignItems:'center',
        justifyContent: 'space-around',
  },
  buttons:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  image:{
    height:height,
    flex: 1,
    position:'absolute'
  },
  backgroundImage:{
    flex:1,
    height: null,
    width:width*1.9,
    alignItems:'center',
    justifyContent:"center",
    resizeMode:'stretch',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

