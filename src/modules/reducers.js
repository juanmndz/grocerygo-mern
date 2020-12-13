import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../utils/history';
import productReducer from './product/productReducer';
import catalogReducer from './catalog/catalogReducer'
import cartReducer from './cart/cartReducer'

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    product: productReducer,
    catalog: catalogReducer,
    cart: cartReducer,
    ...injectedReducers
  });

  return rootReducer;
}