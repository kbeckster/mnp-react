import React from 'react';
import {Button,Platform,ScrollView,StyleSheet,Text,Image,TouchableOpacity,View} from 'react-native';
import {createNavigator,createNavigationContainer,TabRouter,addNavigationHelpers,TabNavigator} from 'react-navigation';
import MapView from 'react-native-maps';

//Custom created Views
import MapScreen from './components/MapScreen';
import Locations from './components/Locations';
import ExploreRestoreDiscover from './components/ExploreRestoreDiscover';
import Trail from './components/Trail';

//Custom styles
import styles from './styles/Styles';


const Routes = TabNavigator({
  Home: { screen: MapScreen },
  Locations: { screen: Locations },
  ExplRestDisc: { screen: ExploreRestoreDiscover },
  Trail: { screen: Trail },
},
 {
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions : {
    showIcon: true,
    inactiveTintColor: '#000',
    inactiveTintColor: '#000'
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.main}>
      <View style={styles.header}/>
      <Text style={styles.donatebutton}> Donate </Text>
        <Routes/>
      </View>


    );
  }
}
