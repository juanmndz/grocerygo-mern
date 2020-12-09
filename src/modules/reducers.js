import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import usersReducer from './users/usersReducer';
import history from '../utils/history';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    users: usersReducer,
    ...injectedReducers,
  });

  return rootReducer;
}