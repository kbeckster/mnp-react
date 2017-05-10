import React from 'react';
import {Button,Platform,ScrollView,StyleSheet,Text,Image,TouchableOpacity,View} from 'react-native';
import {createNavigator,createNavigationContainer,TabRouter,addNavigationHelpers,TabNavigator} from 'react-navigation';
import MapView from 'react-native-maps';

//Custom created Views
import MapScreen from './MapScreen';
import Locations from './Locations';
import ExploreRestoreDiscover from './ExploreRestoreDiscover';
import Trail from './Trail';

//Custom developed imports
var styles = require('./Styles');

const Routes = TabNavigator({
  Home: { screen: MapScreen },
  Locations: { screen: Locations },
  ExplRestDisc: { screen: ExploreRestoreDiscover },
  Trail: { screen: Trail }
}, {
  tabBarOptions : {
    style: {
    },
    showIcon: true,
    inactiveTintColor: '#000',
    inactiveTintColor: '#000'
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
      <View style={styles.header}/>
      <Text style={styles.mnp}> MNP </Text>
      <Text style={styles.donatebutton}> Donate </Text>
        <Routes/>
      </View>


    );
  }
}
