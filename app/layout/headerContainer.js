import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import API from './../services/Api';
import { bindActionCreators } from 'redux'
import { loginOutUser } from '../actions'
import deviceStorage from '../services/deviceStorage';
import loginServices from '../services/login';
import {countries} from '../components/country.js';
import { Font } from 'expo';


import {
    Image,
    Linking
} from 'react-native';

const mapStateToProps = state => ({
    ...state.user
})

const mapDispatchToProps = {
    loginOut: () => loginOutUser()
  }

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.loginWithGoogle = this.loginWithGoogle.bind(this);
        this.login = new loginServices();
    }

    // Set up Linking
  componentDidMount() {
    Font.loadAsync({
        'Slabo': require('../../app/assets/fonts/Slabo.ttf'),
        'Space': require('../../app/assets/fonts/SpaceMono-Regular.ttf'),
        'Sedwick': require('../../app/assets/fonts/SedgwickAveDisplay-Regular.ttf'),
      });
    this.loggInUserIfHaveToken();
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this.handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  };

    componentWillUnmount() {
        // Remove event listener
        Linking.removeEventListener('url', this.handleOpenURL);
    };

    handleOpenURL = ({ url }) => {
    // Extract stringified user string out of the URL
    const urlString = new URL(url);
    const token = urlString.searchParams.get("token");
        if (token != undefined) {
            deviceStorage.saveItem("jwt", token);
            this.login.getUser(token);
        }
    };

    async loggInUserIfHaveToken () {
        var token = await deviceStorage.getItem("jwt");
        if (token != null) {
            this.login.getUser(token);
        }
    };

    // Open URL in a browser
    // Handle Login with Google button tap
    loginWithGoogle = () => {
        this.openURL('https://geographyapi.herokuapp.com/users/auth/google');
    } 
    openURL = (url) => {
        // Use SafariView on iOS
        Linking.openURL(url);
    };

  render() {
    return (
        <Header 
            user={this.props}
            LogginHandler={this.loginWithGoogle}
            LogginOutHandler={this.props.loginOut}
            countries={countries}
        />
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);