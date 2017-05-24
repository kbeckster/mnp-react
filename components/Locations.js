import React from 'react';
import { StyleSheet, Text, View, Button, ListView, Image} from 'react-native';

//Custom created Views
import LocationsHeader from './LocationsHeader';

//Custom styles
import styles from '../styles/locations-styles';

class Locations extends React.Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Pieper Power Education Center', 'Observation Tower', 'Observation Platform, Pieper Power Education Center', 'Observation Tower', 'Observation Platform, Pieper Power Education Center', 'Observation Tower', 'Observation Platform']),
    };
  }

  render() {
    return (
      <ListView
        style={styles.listview}
        dataSource={this.state.dataSource}
        renderRow={(data) => <View style={styles.locationRow}><Text>{data}</Text></View>}
        //renderHeader={() => <View style= {styles.locationHeader}><Text style={styles.locationHeaderText}>B</Text><Text style={styles.locationHeaderText}>W</Text><Text style={styles.locationHeaderText}>T</Text></View>}
        renderHeader={() => <LocationsHeader />}

      />


    );
  }
}

module.exports = Locations;
