import React from 'react';
import { StyleSheet, Text} from 'react-native';

//Custom styles
import styles from '../styles/Styles';


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
