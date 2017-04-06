
import React from 'react';
import { Button,Platform,ScrollView,StyleSheet,Text,TouchableOpacity,View, Image} from 'react-native';
//import {  createNavigator,createNavigationContainer,TabRouter,addNavigationHelpers,TabNavigator} from 'react-navigation';

import MapView from 'react-native-maps';
var styles = require('./Styles');


class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map View',
  };
  render() {
    return (

      <MapView style={styles.container}
      initialRegion={{
        latitude: 43.218547,
        longitude: -88.030357,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
      <View pointerEvents="none" style={{position: 'absolute', top: 43.218547, left: -88.030357}}>
      <Image source={{uri: './winter_static2.png'}} />
      </View>

      </MapView>








    );
  }
}
module.exports = MapScreen;
