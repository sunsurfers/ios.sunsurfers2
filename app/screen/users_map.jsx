const React, {
    StyleSheet, Text, View, PropTypes
    } = require('react-native');

const _, {reduce, assign} = require('lodash');


const styles = StyleSheet.create({});

class Map extends React.Component {
  constructor() {
    super;

    this.state = {}
  }

  render() {
    console.log('render of Map', this.props, this.state);

    return (<View>
      <Text>this is component "Map" ...</Text>
    </View>)
  }
}

Map.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
Map.propTypes = {};

module.exports = Map;