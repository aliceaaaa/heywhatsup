import { combineReducers } from 'redux';
import testReducer from './testReducer';

const appReducer = combineReducers({
  test: testReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;