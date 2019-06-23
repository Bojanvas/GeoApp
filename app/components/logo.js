import React, { Component } from 'react';
import { Image } from 'react-native';

class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Image
            style={{width: 50, height: 50}}
            source={require('../assets/images/'+this.props.imageName)}
          />
        );
    }

}
  

export default Logo;