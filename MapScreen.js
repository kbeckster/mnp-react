
import React from 'react';
import { Button,Platform,ScrollView,StyleSheet,Text,TouchableOpacity,View} from 'react-native';
//import {  createNavigator,createNavigationContainer,TabRouter,addNavigationHelpers,TabNavigator} from 'react-navigation';

import MapView from 'react-native-maps';
var styles = require('./Styles');


class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map View',
  };
  render() {
    return (
      <MapView
        region={{
          latitude: 43.218547,
          longitude: -88.030357,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        //onRegionChange={this.onRegionChange}
        style = {styles.container}
      >
        <MapView.UrlTile
          urlTemplate={'./winter_static2.png'}
        />
      </MapView>
    );
  }
}
module.exports = MapScreen;
