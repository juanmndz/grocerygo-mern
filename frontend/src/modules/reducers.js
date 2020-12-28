import { combineReducers } from 'redux';
import productReducer from './product/productReducer';
import catalogReducer from './catalog/catalogReducer'
import cartReducer from './cart/cartReducer'
import userReducer from './user/userReducer'


const reducer = combineReducers({
  product: productReducer,
  catalog: catalogReducer,
  cart: cartReducer,
  user: userReducer,
})

export default reducer;