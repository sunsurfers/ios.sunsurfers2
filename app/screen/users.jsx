const React, {
    StyleSheet, Text, View, PropTypes
    } = require('react-native');

const _, {reduce, assign} = require('lodash');


const styles = StyleSheet.create({});

class Users extends React.Component {
  constructor() {
    super;

    this.state = {}
  }

  render() {
    console.log('render of Users', this.props, this.state);

    return (<View>
      <Text>this is component "Users" ...</Text>
    </View>)
  }
}

Users.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
Users.propTypes = {};

module.exports = Users;