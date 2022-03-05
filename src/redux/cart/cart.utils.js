export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  const newArray = [...cartItems, { ...cartItemToAdd, quantity: 1 }];

  return newArray;
};

export const removeItemFromCart = (cartItems, cartItemId) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemId);
};

export const decreaseItemQuantity = (cartItems, cartItemId) => {
  const cartItem = cartItems.find(cartItem => cartItem.id === cartItemId);

  if(cartItem.quantity === 1) {
    return removeItemFromCart(cartItems, cartItemId);
  }

  return cartItems.map(item => {
    return item.id === cartItem.id ?
    {...item, quantity: item.quantity - 1} :
    item
  })
}
