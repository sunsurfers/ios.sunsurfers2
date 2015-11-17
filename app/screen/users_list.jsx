const React, {
    StyleSheet, Text, View, PropTypes
    } = require('react-native');

const _, {reduce, assign} = require('lodash');


const styles = StyleSheet.create({});

class List extends React.Component {
  constructor() {
    super;

    this.state = {}
  }

  render() {
    console.log('render of List', this.props, this.state);

    return (<View>
      <Text>this is component "List" ...</Text>
    </View>)
  }
}

List.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
List.propTypes = {};

module.exports = List;