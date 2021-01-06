import Axios from 'axios'

export const CATALOG_LIST_REQUEST = 'CATALOG_LIST_REQUEST'
export const CATALOG_LIST_SUCCESS = 'CATALOG_LIST_SUCCESS'
export const CATALOG_LIST_FAIL = 'CATALOG_LIST_FAIL'

  
export const catalogListAsync = () => async (dispatch) => {
    dispatch({type: CATALOG_LIST_REQUEST})
    try {
      const { data } = await Axios.get('/products')
      dispatch({type: CATALOG_LIST_SUCCESS, payload: data});
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
          dispatch({type: CATALOG_LIST_FAIL, payload: message})
    }
  }