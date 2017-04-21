import React from 'react';
import { Button,
        Platform,
        ScrollView,
        StyleSheet,
        Text,
        TouchableOpacity,
        View} from 'react-native';

var styles = require('./Styles');

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View>
        <Button onPress={() => navigate('MapScreen')} title="Test Link" />
      </View>
  );
  }
}
module.exports = HomeScreen;
