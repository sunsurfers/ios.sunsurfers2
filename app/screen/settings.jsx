const React, {
    StyleSheet, Text, View, PropTypes
    } = require('react-native');

const _, {reduce, assign} = require('lodash');


const styles = StyleSheet.create({});

class Settings extends React.Component {
  constructor() {
    super;

    this.state = {}
  }

  render() {
    console.log('render of Settings', this.props, this.state);

    return (<View>
      <Text>this is component "Settings" ...</Text>
    </View>)
  }
}

Settings.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
Settings.propTypes = {};

module.exports = Settings;