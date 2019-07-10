import React, { Component } from 'react';
import API from './Api';
import { API_URL, API_URL_PROD } from  './../constants/Api';
import { createNewGame, gameOver } from '../actions';

import store from '../store';

class gameServices extends React.Component {
    constructor(props) {
        super(props);
        this.geoApi = new API({ url:API_URL_PROD });
        // create endpoints
        this.geoApi.createEntity({name :'questions/ranked'}, 'ranked');
        this.geoApi.createEntity({name :'results'}, 'results');
    }
    async newGame() {
        try {
              this.geoApi.endpoints.ranked.getAll({})
              .then(({data}) =>  {
                  if (data.length > 0) {
                        store.dispatch(createNewGame(data));
                  } else {
                      console.log('problem with the api')
                  }
                  
              })
        } catch (error) {
          console.log('Game Error: ' + error.message);
        }
    };

    async gameOver(points, time, userID) {
        try {
              this.geoApi.endpoints.results.create({points, time, userID})
              .then(({data}) =>  {
                  if (data) {
                        store.dispatch(gameOver(data));
                  } else {
                      console.log('problem with the api')
                  }
                  
              })
        } catch (error) {
          console.log('Game Error: ' + error.message);
        }
    };
}
  

export default gameServices;