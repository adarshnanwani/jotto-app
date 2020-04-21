import { combineReducers } from 'redux';
import success from './success.reducer';

const rootReducer = combineReducers({
  success,
});

export default rootReducer;
