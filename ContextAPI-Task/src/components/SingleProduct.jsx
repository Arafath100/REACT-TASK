/* eslint-disable react/prop-types */

// Import necessary modules and components
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { CartContext } from "../ContextAPI/CartContext";

// Define the SingleProduct component
// eslint-disable-next-line react/prop-types
const SingleProduct = ({ product, cartPage, count, setCount }) => {
  // Access the CartContext using useContext hook
  const { cart, setCart } = useContext(CartContext);

  // Initialize local state for the product total
  const [productTotal, setProductTotal] = useState(null);

  // Function to update product total when adding a product
  const Addtotals = () => {
    // eslint-disable-next-line react/prop-types
    setProductTotal(product.price * (count + 1));
    setCount(count + 1);
  };

  // Function to update product total when removing a product
  const RemoveTotal = () => {
    // eslint-disable-next-line react/prop-types
    setProductTotal(product.price * (count - 1));
    setCount(count - 1);
  };

  return (
    // eslint-disable-next-line react/prop-types
    <div key={product.id}>
      <div className="products">
        {/* Display product image */}
        <img className="img" src={product.images[0]} alt="product images" />

        {/* Display product title and price */}
        <div className="productDesc">
          <span style={{ fontWeight: 700 }}>{product.title}</span> <br />
          <span>
            <b>Price:</b>
            <i className="fa fa-inr"></i>
            {product.price}
          </span>
        </div>

        {/* Render different components if on cartPage */}
        {cartPage ? (
          <div className="button-container">
            <div className="Total-price">
              <b>TotalPrice:</b>{`₹${productTotal || product.price}`}
            </div>
            
            {/* Button to decrease quantity */}
            <button
              className="quantity-left-plus btn btn-danger btn-number"
              onClick={() => {
                if (count > 0) {
                  RemoveTotal();
                }
              }}
            >
              -
            </button>
            {/* Display quantity */}
            <span className="quantity-display">{count || 1}</span>
            {/* Button to increase quantity */}
            <button
              className="quantity-right-plus btn btn-success btn-number"
              onClick={() => {
                Addtotals();
              }}
            >
              +
            </button>
          </div>
        ) : (
          ""
        )}

        {/* Render "Remove From Cart" or "Add to Cart" button based on cart contents */}
        {cart.find((item) => item.id === product.id) ? (
          <button
            className="button"
            onClick={() => {
              setCart(cart.filter((c) => c.id !== product.id));
            }}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            className="button"
            onClick={() => {
              setCart([...cart, product]);
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
