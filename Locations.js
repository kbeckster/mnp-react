import React from 'react';
import { StyleSheet, Text, View, Button, ListView} from 'react-native';
var styles = require('./Styles');



class Locations extends React.Component {

//static navigationOptions = {
//   tabBarLabel: 'LocTest',
//   // Note: By default the icon is only shown on iOS. Search the showIcon option below.
//   tabBarIcon: ({ tintColor }) => (
//     <Image
//       source={require('./trails_button.png')}
//       style={[styles.icon, {tintColor: tintColor}]}
//     />
//   ),
// };

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
        renderHeader={() => <View style= {styles.locationHeader}><Text style={styles.locationHeaderText}>B</Text><Text style={styles.locationHeaderText}>W</Text><Text style={styles.locationHeaderText}>T</Text></View>}
      />


    );
  }
}

module.exports = Locations;
