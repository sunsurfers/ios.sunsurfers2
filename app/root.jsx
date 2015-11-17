const React, {
    StyleSheet, Text, View, PropTypes
    } = require('react-native');

const _, {_reduce, _assign} = require('lodash');

const styles = StyleSheet.create({});

const SCREENS = _reduce({
  'auth': require('./screen/auth'),
  'filter': require('./screen/filter'),
  'users': require('./screen/users'),
  'profile': require('./screen/profile'),
  'settings': require('./screen/settings'),
});


class Root extends React.Component {
  render() {
    console.log('[APP STATE]:', this.props);

    const {
        filter,
        location,
        map,
        router,
        users
        } = this.props;

    const Screen = SCREENS[router.screen];
    if(!Screen) {
      return (<View>
        <Text>router.screen - {router.screen} - not found</Text>
      </View>)
    }

    return (<View>
      <Screen {...this.props} />
    </View>)
  }
}

Root.defaultProps = {};
/* https://facebook.github.io/react/docs/reusable-components.html */
Root.propTypes = {};

module.exports = Root;