var React = require('react-native');
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as Actions from '../actions';

function mapStateToProps(state) {
    return {
        user: state.userReducers.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        bindActionCreators(Actions, dispatch)
    };
}

var {
    View,
    TouchableHighlight,
    Text
} = React;

var Login = React.createClass({
    onLoginButtonPress() {
        this.props.login({
            userName: 'test',
            password: 'test'
        });
    },
    render() {
       return (
        <View>
            {
                !this.props.user.loggedIn && 
                <TouchableHighlight onPress={this.onLoginButtonPress}>
                    <Text>Log in</Text>
                </TouchableHighlight>
            }
        </View>
       )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);