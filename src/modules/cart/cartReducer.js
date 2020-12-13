import { CART_ADD_ITEM, CART_CLEAR_ITEMS, CART_REMOVE_ITEM } from "./cartActions"

  
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
        const item = action.payload
  
        const existItem = state.cartItems.find((x) => x.product === item.product)
  
        if (existItem) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.product === existItem.product ? item : x
            ),
          }
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          }
        }
      case CART_REMOVE_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.product !== action.payload),
        }
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