import { combineReducers } from 'redux';
import usersReducer from './usersReducers';
import authReducer from './authReducer';
import adminReducer from './adminReducers';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminReducer
});
