import React from 'react';
import {Button,Platform,ScrollView,StyleSheet,Text,Image,TouchableOpacity,View} from 'react-native';
import {createNavigator,createNavigationContainer,TabRouter,addNavigationHelpers,TabNavigator} from 'react-navigation';



var styles = require('./Styles');


class HomeScreen extends React.Component {



  render() {
    return(
      <View >
      <Button
        onPress={() => this.props.navigation.navigate('MapView')}
        title="Go to map"
        />
        <Button onPress={() => navigate('MapScreen')} title="Test Link" />
      </View>
  );
  }
}


module.exports = HomeScreen;
