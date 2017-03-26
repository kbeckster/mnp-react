import React from 'react';
import { StyleSheet, Text, View, Button, ListView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapView from 'react-native-maps';

//Custom developed imports
var Description = require('./description');

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return(
    <View>
      <Button onPress={() => navigate('MNPMap')} title="Map View"/>
      <Button onPress={() => navigate('Description')} title="Description"/>
    </View>
  );
  }
}

class MNPMap extends React.Component {
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
  />
    );
  }
}

const Routes = StackNavigator({
  Home: { screen: HomeScreen },
  MNPMap: { screen: MNPMap },
  Description: { screen: Description }
});

export default class App extends React.Component {
  render() {
    return (
       <Routes />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
