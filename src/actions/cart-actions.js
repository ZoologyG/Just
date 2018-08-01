export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';

export function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity, unitCost }
  }
}

export function updateCart(product, quantity, unitCost) {
  return {
    type: UPDATE_CART,
    payload: { product, quantity, unitCost }
  }
}

export function deleteCart(product, quantity, unitCost) {
  return {
    type: DELETE_CART,
    payload: { product }
  }
}