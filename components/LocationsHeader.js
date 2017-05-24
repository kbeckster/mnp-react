import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';

//Custom styles
import styles from '../styles/locations-styles';

const LocationsHeader = (props) => (
  <View style= {styles.locationHeader}>
    <Image style= {styles.locationHeaderImg} source={require('../img/pointofinterest_greenicon.png')} />
    <Image style= {styles.locationHeaderImg} source={require('../img/wetland_greenicon.png')} />
    <Image style= {styles.locationHeaderImg} source={require('../img/tree_greenicon.png')} />
  </View>
);

export default LocationsHeader;
