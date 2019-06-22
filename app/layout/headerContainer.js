import React, { Component } from 'react';
import Header from './header';
import API from './../services/Api';
import { API_URL } from  './../constants/Api';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { bindActionCreators } from 'redux'
import jwtDecode from 'jwt-decode';

import {
    Image,
    Linking
} from 'react-native';

const mapStateToProps = state => ({
    ...state.user
})

const mapDispatchToProps = {
    loginUser
}

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.geoApi = new API({ url:API_URL })

        // This binding is necessary to make `this` work in the callback
        this.loginWithGoogle = this.loginWithGoogle.bind(this);
    }

    // Set up Linking
  componentDidMount() {
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
        var user = jwtDecode(token);
        console.log(user.email);
        this.geoApi.createEntity({name :'users'});
        this.geoApi.endpoints.users.getOne(
            { id: user.email },
            { headers: {"jwt" : token} }
        )
        .then(({data}) =>  {
            if (data.length > 0) {
                this.props.loginUser(user, token);
            } else {
                console.log('user not found')
            }
            
        })
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
        <Header user={this.props} LogginHandler = { this.loginWithGoogle}/>
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);