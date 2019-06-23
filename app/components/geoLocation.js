import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';

class GeoLocation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
            <Text> select country:
                </Text>
                <Picker
                style={{ color: "#33afd4" }}
                // selectedValue={this.state.location}
                // onValueChange={(itemValue, itemIndex) => {
                //     AsyncStorage.setItem("location", itemValue),
                //     this.setState({ location: itemValue });
                // }}
                >
                {this.props.countries.map(function(n,i){
                        return <Picker.Item key={i} label={n.name} value={n.name} />
                })}
                </Picker>
            </View>
        )
    }

}
  

export default GeoLocation;