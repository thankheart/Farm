// src/pages/cart.js
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Extract price function (from Products component)
const extractPrice = (excerpt) => {
  const priceMatch = excerpt.match(/\$([0-9]+(?:\.[0-9]{2})?)/); // Regex for a price
  if (priceMatch) {
    const price = priceMatch[0].replace("$", ""); // Remove dollar sign
    const priceValue = parseFloat(price);
    return isNaN(priceValue) ? null : priceValue; // Return parsed price if valid
  }
  return null; // Return null if no price is found
};

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart data from local storage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // Handle remove item from the cart
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) return; // Avoid negative quantity
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate the total price using the extractPrice function
  const totalPrice = cartItems.reduce((total, item) => {
    const productPrice = extractPrice(item.excerpt);
    return total + (productPrice ? productPrice * item.quantity : 0);
  }, 0);

  return (
    <div className="cart-page container py-5">
      <h1 className="text-center mb-3 cart-header">Your Cart</h1>

      {/* Cart items */}
      {cartItems.length === 0 ? (
        <p className="text-center cart-empty-message">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => {
            const itemPrice = extractPrice(item.excerpt); // Get the price using extractPrice function
            return (
              <div
                key={item.id}
                className="cart-item d-flex justify-content-between align-items-center mb-3"
              >
                <div className="d-flex">
                  <img
                    src={item.feature_image}
                    alt={item.title}
                    className="cart-item-img"
                  />
                  <div className="item-details ms-3">
                    <p>{item.title}</p>
                    <h4 className="price">
                      Price:{" "}
                      {itemPrice !== null
                        ? `$${itemPrice.toFixed(2)}`
                        : "Price not available"}
                    </h4>
                  </div>
                </div>
                <div className="quantity-controls">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    className="form-control"
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                  />
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Total price */}
      {cartItems.length > 0 && (
        <div className="cart-summary d-flex justify-content-between mt-4">
          <h4 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h4>
          <button className="btn btn-primary checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
