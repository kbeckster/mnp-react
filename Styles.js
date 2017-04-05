
var React = require('react-native');

var StyleSheet = React.StyleSheet.create({
  test: {
    color: '#FF69B4'
  },
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
      tabContainer: {
      flexDirection: 'row',
      height: 48,
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 4,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 4,
    },
    description: {
      alignItems: 'center',
      justifyContent: 'center',
    }

});

module.exports = StyleSheet;
