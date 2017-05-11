
var React = require('react-native');

var StyleSheet = React.StyleSheet.create({
  temp: {
    padding: 100
  },
  icon: {
    width: 26,
    height: 26,
  },
  footer:{
  },
  header:{
    height:40,
  },
  listview:{
    marginTop:25,
    marginLeft:25,
    marginRight:25
  },
  donatebutton:{
    marginLeft:300
  },
  locationHeaderText: {
    justifyContent: 'center',
    padding: 20,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderBottomColor: '#fff'
  },
  locationHeader: {
      flexDirection: 'row',
    },
  locationRow:{
    padding: 50,
    borderColor: '#E8E8E8',
    borderWidth: 1,
  },
  map: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
  },
  // container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   tabContainer: {
  //     flexDirection: 'row',
  //     height: 48,
  //   },
  //   tab: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     margin: 4,
  //     borderWidth: 1,
  //     borderColor: '#ddd',
  //     borderRadius: 4,
  //   },
  //   mapcontainer: {
  //     flex: 1,
  //      justifyContent: 'center',
  //      alignItems: 'center',
  //      backgroundColor: '#F5FCFF',
  //   },
  //   map: {
  //     position: 'absolute',
  //     top: 0,
  //     right: 0,
  //     bottom: 0,
  //     left: 0,
  //   },
  //   marker: {
  //     marginLeft: 46,
  //     marginTop: 33,
  //     fontWeight: 'bold',
  //   }

});

module.exports = StyleSheet;
