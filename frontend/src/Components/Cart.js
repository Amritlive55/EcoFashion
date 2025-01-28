import "./Cart.css"; // Import the CSS file for styling
import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Eco-Friendly T-Shirt",
      price: 500,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Recycled Tote Bag",
      price: 500,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  const [plasticWeight, setPlasticWeight] = useState(0); // Weight of plastic contributed by the user

  // Method to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate discount based on plastic weight
  const discount = plasticWeight * 100; // Assuming $0.5 discount per kg of plastic
  const finalPrice = totalPrice - discount > 0 ? totalPrice - discount : 0; // Prevent negative total

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Price: Rs {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Subtotal: Rs {totalPrice.toFixed(2)}</h3>
            <div className="plastic-discount">
              <label>
                Enter plastic waste weight (kg):{" "}
                <input
                  type="number"
                  value={plasticWeight}
                  onChange={(e) => setPlasticWeight(Number(e.target.value))}
                  min="0"
                  step="0.1"
                  placeholder="Enter weight in kg"
                />
              </label>
              <p>Discount: -Rs {discount.toFixed(2)}</p>
            </div>
            <h3>Total after Discount: Rs {finalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
