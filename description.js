import React from 'react';
import { StyleSheet, Text} from 'react-native';

var Description = React.createClass({
  render() {
    return (
      <Text style={descriptionStyle.container}>
        Restore
        Explore
        Discover
      </Text>
    );
  }
});

//stlyes aren't working need to figure out how to add to remote file
const descriptionStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = Description;
