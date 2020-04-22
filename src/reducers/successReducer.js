import { actionTypes } from '../actions/index';
const initialState = false;

/**
 * @function successReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {boolean} - new success state.
 */
export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
