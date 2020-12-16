import { CART_ADD_ITEM, CART_CLEAR_ITEMS, CART_REMOVE_ITEM } from "./cartActions"
import { addItemToCart, removeItemFromCart } from "./cartUtils";

  
const cartReducer = (
    state = { cartItems: [
      {
        id: '1',
        title: 'Potato',
        price: '2.24',
        qty: 2,
        stock: 100,
        desc: 'Potato',
        imgsrc: 'https://www.alimentarium.org/en/system/files/thumbnails/image/AL027-01_pomme_de_terre_0.jpg',
      },
      {
        id: '2',
        title: 'Potato',
        price: '2.24',
        qty: 2,
        stock: 100,
        desc: 'Potato',
        imgsrc: 'https://www.alimentarium.org/en/system/files/thumbnails/image/AL027-01_pomme_de_terre_0.jpg',
      },
    ] 
  },
    action
  ) => {
    switch (action.type) {
      case CART_ADD_ITEM:
        return {...state, cartItems: addItemToCart(state.cartItems, action.payload)}
      case CART_REMOVE_ITEM:
        return {...state, cartItems: removeItemFromCart(state.cartItems, action.payload)}
      case CART_CLEAR_ITEMS:
        return {
          ...state,
          cartItems: [],
        }
      default:
        return state
    }
  }
  export default cartReducer