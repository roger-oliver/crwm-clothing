import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { imageUrl, name, quantity, price, id }, clearItem}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(id)}>&#10005;</div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  clearItem: itemId => dispatch(clearItemFromCart(itemId))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);