import React, { Component } from 'react';
import { Image, View } from 'react-native';

class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            /* to do press event return to home */
            <View>
                <Image
                    style={{width: 50, height: 50}}
                    
                    source={require('../assets/images/Geographylogo.png')}
                />
            </View>
        );
    }

}
  

export default Logo;