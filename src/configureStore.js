import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';

export const middlewares = [ReduxThunk];

const createStoreWithMiddleware = applyMiddleware(...middlewares);

const store = createStoreWithMiddleware(rootReducer)(createStore);

export default store;
