import produce from 'immer';

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'LOAD_USERS_ERROR';


const initialState = {
  cart: false,
  error: false,
  users: [],
};

const usersReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_USERS:
        draft.loading = true;
        draft.error = false;
        draft.users = [];
        break
      case LOAD_USERS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.users = action.payload;
        break
      case LOAD_USERS_ERROR:
        draft.loading = false;
        draft.error = action.payload;
        break
      default:
        return state
    }
  });

export default usersReducer;