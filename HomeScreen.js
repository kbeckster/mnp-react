import React from 'react';
import { Button,
        Platform,
        ScrollView,
        StyleSheet,
        Text,
        TouchableOpacity,
        View} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return( 
      <View>
        <Button onPress={() => navigate('MapScreen')} title="Go To Map" />
        <Button onPress={() => navigate('Description')} title="Description" />
      </View>
  );
  }
}
module.exports = HomeScreen;