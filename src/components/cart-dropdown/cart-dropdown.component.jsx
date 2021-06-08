import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cart }) => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    {cart.cartItems.length}
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = () => ({ cart }) => ({
  cart
});

export default connect(mapStateToProps)(CartDropdown);
