import React from 'react';
import { Button,
        Platform,
        ScrollView,
        StyleSheet,
        Text,
        TouchableOpacity,
        View} from 'react-native';
import {  createNavigator,
        createNavigationContainer,
        TabRouter,
        addNavigationHelpers,
        TabNavigator
 } from 'react-navigation';

import MapView from 'react-native-maps';
import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';


//Custom developed imports
var Description = require('./description');
var styles = require('./Styles');

const Routes = TabNavigator({
  Home: { screen: HomeScreen },
  MapScreen: { screen: MapScreen },
  Description: { screen: Description }
});

export default class App extends React.Component {
  render() {
    return (
       <Routes />
    );
  }
}
