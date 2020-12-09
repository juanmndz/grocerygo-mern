import Axios from 'axios';
import { LOAD_USERS, LOAD_USERS_ERROR, LOAD_USERS_SUCCESS } from './usersReducer';

export const listUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USERS });
  try {
    const { data } = await Axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: LOAD_USERS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: LOAD_USERS_ERROR, payload: message });
  }
}
