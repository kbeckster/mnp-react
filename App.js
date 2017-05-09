import React from 'react';
import {Button,Platform,ScrollView,StyleSheet,Text,Image,TouchableOpacity,View} from 'react-native';
import {createNavigator,createNavigationContainer,TabRouter,addNavigationHelpers,StackNavigator} from 'react-navigation';

import MapView from 'react-native-maps';
import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';

//Custom developed imports
var Description = require('./description');
var styles = require('./Styles');

const MNPStack = StackNavigator({

  Home: {
    screen: MapScreen,
  },
  Details: {
    screen: HomeScreen,
    path: '/details'
  },
});



export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>


        <MNPStack style={{flex:2}}/>
        <Button
  onPress={() => this.props.navigation.navigate('HomeScreen')} title="Details"
/>

      </View>


    );
  }
}
