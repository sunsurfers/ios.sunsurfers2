const React, {
    StyleSheet, Text, View, PropTypes
    } = require('react-native');

const _, {reduce, assign} = require('lodash');


const styles = StyleSheet.create({});

class Profile extends React.Component {
  constructor() {
    super;

    this.state = {}
  }

  render() {
    console.log('render of Pro', this.props, this.state);

    return (<View>
      <Text>this is component "Pro" ...</Text>
    </View>)
  }
}

Pro.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
Pro.propTypes = {};

module.exports = Pro;