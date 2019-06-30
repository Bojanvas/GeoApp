import React, { Component } from 'react';
import API from './Api';
import { loginUser } from '../actions';
import { API_URL, API_URL_PROD } from  './../constants/Api';
import store from '../store';
import jwtDecode from 'jwt-decode';

class loginServices extends React.Component {
    constructor(props) {
        super(props);
        this.geoApi = new API({ url:API_URL_PROD });
        // create endpoints
        this.geoApi.createEntity({name :'users'}, 'users');
    }

    async getUser(token) {
        var user = jwtDecode(token);
        try {
              this.geoApi.endpoints.users.getOne(
                  { id: user.email },
                  { headers: {"jwt" : token} }
              )
              .then(({data}) =>  {
                  if (data.length > 0) {
                        store.dispatch(loginUser(data[0], token));
                  } else {
                      console.log('user not found')
                  }
                  
              })
        } catch (error) {
          console.log('User Error: ' + error.message);
        }
    };

    tokenIsVaild (token) {
        var user = jwtDecode(token);
        var now = new Date();
        if (now.getTime() >= user.exp * 1000) {
            return false;
          }
        return true;  
    }
}
  

export default loginServices;