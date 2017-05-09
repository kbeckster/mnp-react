
import React from 'react';
import { Button,Platform,ScrollView,StyleSheet,Text,TouchableOpacity,View, Image} from 'react-native';

import MapView from 'react-native-maps';
var styles = require('./Styles');


class MapScreen extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      region: {
            latitude: 43.199970,
            longitude: -88.013251,
            latitudeDelta: 0.02866,
            longitudeDelta: 0.009757,
      },
      markers:[ {
          key:0,
          latlng: {longitude:-88.009018, latitude:43.193713},
          title: "Pieperpower Education Center",
          description: "description"
        },
        {
          key:1,
          latlng: {longitude:-88.005628, latitude:43.193682},
          title: "Johnson's Woods",
          description: "description"
        },
        {
          key:2,
          latlng: {longitude:-88.019704, latitude:43.196935},
          title: "Pat's Pond",
          description: "description"
        },
        {
          key:3,
          latlng: {longitude:-88.015885, latitude:43.199219},
          title: "Paul's Pond",
          description: "description"
        },
        {
          key:4,
          latlng: {longitude:-88.017301, latitude:43.196951},
          title: "Observation Tower",
          description: "description"
          }
      ]
    };
  }

    render() {
      return (
                  <MapView style={styles.map}
                  initialRegion={this.state.region}
                  onRegionChange={this.onRegionChange}
                  >
                  {this.state.markers.map(marker => (
                    <MapView.Marker
                      key={marker.key}
                      image={require('./pointofinterest_mapicon.png')}
                      coordinate={marker.latlng}
                      title={marker.title}
                      description={marker.description}
                      />
                    ))}
                  </MapView>

      );
  }
}
module.exports = MapScreen;
