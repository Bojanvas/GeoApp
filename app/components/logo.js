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
                    source={require('../assets/images/'+this.props.imageName)}
                />
            </View>
        );
    }

}
  

export default Logo;