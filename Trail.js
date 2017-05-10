import React from 'react';
import { StyleSheet, Text} from 'react-native';
var styles = require('./Styles');

var Trail = React.createClass({
  render() {
    return (
      <Text style={styles.temp}>
        Trail Map goes here
      </Text>
    );
  }
});

module.exports = Trail;
