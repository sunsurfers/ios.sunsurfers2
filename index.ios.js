'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    } = React;

const Root = require('./app/root');

const store = require('redux').createStore(require('./reducer/index'));

class sunsurfers3 extends React.Component {
  constructor() {
    super;

    this.state = {};

    store.subscribe(function () {
      this.setState({
        store: store.getState()
      })
    }.bind(this))
  }

  dispatch(type, data) {
    console.log('[DISPATCH]:', type, data);

    if (!type) throw new Error('Тип экшна должен быть указан')

    return store.dispatch({
      type,
      data
    });
  }

  goto(page, params) {
    if (!page) throw new Error('Укажи название страницы')

    return this.dispatch('GOTO', {
      page, params
    })
  }

  render() {
    if (this.state.store) {
      return (
          <Root {...this.state.store} dispatch={this.dispatch} goto={this.goto}/>
      );
    } else {
      return (
          <View styles={{backgroundColor: '#cfcfcf'}}>
            <Text>...</Text>
          </View>
      )
    }
  }
}
AppRegistry.registerComponent('sunsurfers3', () => sunsurfers3);