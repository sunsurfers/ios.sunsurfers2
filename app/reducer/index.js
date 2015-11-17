"use strict";

const reducers = {
  'filter': require('./filter-reducer'),
  'location': require('./location-reducer'),
  'map': require('./map-reducer'),
  'router': require('./router-reducer'),
  'users': require('./users-reducer')
}

const _, {_reduce, _assign} = require('lodash');

module.exports = function (prev, action) {
  return _reduce(reducers, function(tree, func, name){
    tree[name] = func(prev[name], action);
    return tree
  }, {})
}