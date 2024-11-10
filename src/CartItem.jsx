import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping, onRemoveItem }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    var price = 0;
    for (const item of cart) {
      console.log(calculateTotalCost(item));
      price += calculateTotalCost(item);
    }
    return price;
  };

  const calculateTotalNumberOfPlants = () => {
    var count = 0;
    for (const item of cart) {
      count += item.quantity;
    }
    return count;
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckout = (e) => {
    alert('Functionality to be added in the future');
  }

  const handleIncrement = (item) => {
    dispatch(updateQuantity({item, change: 'increment'}));
  };

  const handleDecrement = (item) => {
    dispatch(updateQuantity({item, change: 'decrement'}));
    const name = item.name;
    if (cart.find(item => item.name === name)) {
      onRemoveItem(name);
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
    onRemoveItem(item.name);
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const cost = parseInt(item.cost.substring(1));
    return cost * item.quantity;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Number of Plants: {calculateTotalNumberOfPlants()}</h2>
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn" style={{marginBottom: '20px'}} >
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckout(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


