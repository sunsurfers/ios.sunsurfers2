const React, {
    StyleSheet, Text, View, PropTypes
    } = require('react-native');

const _, {reduce, assign} = require('lodash');


const styles = StyleSheet.create({

});

class Filter extends React.Component {
  constructor() {
    super;

    this.state = {}
  }

  render() {
    console.log('render of Filter', this.props, this.state);

    return (<View>
      <Text>this is component "Filter" ...</Text>

    </View>)
  }
}

Filter.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
Filter.propTypes = {};

module.exports = Filter;