import Axios from 'axios'

export const CATALOG_LIST_REQUEST = 'CATALOG_LIST_REQUEST'
export const CATALOG_LIST_SUCCESS = 'CATALOG_LIST_SUCCESS'
export const CATALOG_LIST_FAIL = 'CATALOG_LIST_FAIL'

const catalog = [
    {
      id: '1',
      title: 'Potato',
      price: '2.24',
      stock: 100,
      desc: '1 lb',
      imgsrc: 'https://www.alimentarium.org/en/system/files/thumbnails/image/AL027-01_pomme_de_terre_0.jpg',
    },
    {
      id: '2',
      title: 'Potato',
      price: '2.24',
      stock: 100,
      desc: '1 lb',
      imgsrc: 'https://www.alimentarium.org/en/system/files/thumbnails/image/AL027-01_pomme_de_terre_0.jpg',
    },
  ]
  
export const catalogListAsync = () => async (dispatch) => {
    dispatch({type: CATALOG_LIST_REQUEST})
    try {
    //   const { data } = await Axios.get.mockResolvedValueOnce(catalog);
      dispatch({type: CATALOG_LIST_SUCCESS, payload: catalog});
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
          dispatch({type: CATALOG_LIST_FAIL, payload: message})
    }
  }