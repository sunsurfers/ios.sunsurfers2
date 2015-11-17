/** @docs: http://rackt.org/redux/docs/advanced/Middleware.html */

/*
  read:
    http://briantroncone.com/?p=529
    https://medium.com/@meagle/understanding-87566abcfb7a
*/
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

module.exports = logger;