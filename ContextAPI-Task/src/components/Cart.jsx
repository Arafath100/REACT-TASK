// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../ContextAPI/CartContext";
import SingleProduct from "./SingleProduct";

// Define the Cart component
const Cart = () => {
  // Access the cart data from the CartContext using the useContext hook
  const { cart } = useContext(CartContext);

  // Initialize state to track the count of each product in the cart
  const [productCounts, setProductCounts] = useState(
    cart.reduce((counts, product) => {
      counts[product.id] = 1; // Initialize each product count to 1
      return counts;
    }, {})
  );

  // Function to update the count of a specific product in the cart
  const updateProductCount = (productId, newCount) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: newCount,
    }));
  };

  // Function to calculate the total price of all items in the cart
  const calculateTotalPrice = () => {
    let totalPrice = cart.reduce((sum, product) => {
      const productCount = productCounts[product.id];
      const productPrice = product.price;
      return sum + productCount * productPrice;
    }, 0);

    return totalPrice;
  };

  return (
    <div className="text-center">
      <h1 style={{ color: "#ededed" }}>My Cart</h1>
      <span className="container">Sub Total  : Rs{calculateTotalPrice()}</span>
      
      {/* Display an image if the cart is empty */}
      {cart.length === 0 && (
        <div className="NoItems">
          <img
            src="https://img.freepik.com/premium-vector/young-man-standing-with-shopping-cart-he-holding-paper-list-mall-supermarket_1150-51048.jpg?size=626&ext=jpg&ga=GA1.2.531849636.1695725146&semt=ais"
            alt="Cart Empty image"
          />
        </div>
      )}
      
      {/* Render the products in the cart */}
      <div className="cart-product">
        {cart.map((product) => (
          <SingleProduct
            key={product.id}
            product={product}
            cartPage={true}
            count={productCounts[product.id]}
            setCount={(newCount) => updateProductCount(product.id, newCount)}
          />
        ))}
      </div>
      <br />
      <span className="container1">Total : Rs{calculateTotalPrice()}</span>
    </div>
  );
};

// Export the Cart component as the default export
export default Cart;
