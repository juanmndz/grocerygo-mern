import Axios from 'axios';
import { loadUsers, usersLoaded, usersLoadingError } from './usersReducer';

export const listUsers = () => async (dispatch) => {
  loadUsers()
  try {
    const { data } = await Axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(usersLoaded(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
        usersLoadingError(message)
  }
}
