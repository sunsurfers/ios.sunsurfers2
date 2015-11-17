const React, {
    StyleSheet, Text, View, PropTypes
    } = require('react-native');

const _, {reduce, assign} = require('lodash');


const styles = StyleSheet.create({});

class Auth extends React.Component {
  constructor() {
    super;

    this.state = {}
  }

  render() {
    console.log('render of Auth', this.props, this.state);

    return (<View>
      <Text>this is component "Auth" ...</Text>
    </View>)
  }
}

Auth.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
Auth.propTypes = {};

module.exports = Auth;