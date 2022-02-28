import CartActionTypes from './cart.action.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = cartId => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: cartId,
})

export const decreaseItemQuantity = cartId => ({
  type: CartActionTypes.DECREASE_ITEM_QUANTITY,
  payload: cartId,
})