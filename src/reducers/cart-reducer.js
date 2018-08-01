import { ADD_TO_CART, UPDATE_CART, DELETE_CART } from '../actions/cart-actions'

const cartInitialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}

export function cartReducer(state=cartInitialState, action) {
  switch(action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }
    case UPDATE_CART: {
      console.log(UPDATE_CART);
      return state;
    }
    case DELETE_CART: {
      console.log(DELETE_CART);
      return state;
    }
    default: {
      return state;
    }
  }
}