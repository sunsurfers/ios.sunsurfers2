"use strict";

function router(state = [], action) {
  if(action.type !== 'GOTO') return state;

  const newState = state.concat([{
    page: action.page,
    params: action.params
  }]);

  return newState
}
module.exports = router;