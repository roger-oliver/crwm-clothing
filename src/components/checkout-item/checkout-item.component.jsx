import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart, decreaseItemQuantity, addItem } from "../../redux/cart/cart.actions";

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, decreaseQuantity, addItem}) => {
  const { imageUrl, name, quantity, price, id } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseQuantity(id)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(id)}>&#10005;</div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  clearItem: itemId => dispatch(clearItemFromCart(itemId)),
  decreaseQuantity: itemId => dispatch(decreaseItemQuantity(itemId)),
  addItem: cartItem => dispatch(addItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);