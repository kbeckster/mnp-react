import React from 'react';
import { StyleSheet, Text} from 'react-native';
var styles = require('./Styles');

var Description = React.createClass({
  render() {
    return (
      <Text style={styles.container}>
        Restore
        Explore
        Discover
      </Text>
    );
  }
});

module.exports = Description;
