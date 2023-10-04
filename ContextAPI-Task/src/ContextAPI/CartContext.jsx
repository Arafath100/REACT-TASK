// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from "react";

// Create a new context called CartContext
const CartContext = createContext();

// Define a CartProvider component
// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  // Define state variables for products and the shopping cart
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Use the useEffect hook to fetch product data when the component mounts
  useEffect(() => {
    // Fetch product data from a JSON file or API
    fetch("/product/product.json")
      .then((response) => response.json())
      .then((result) => setProducts(result.products))
      .catch((e) => console.log(e));
  }, []);

  // Render the CartProvider component with the CartContext.Provider
  return (
    <CartContext.Provider value={{ products, setCart, cart }} style={{backgroundColor:'#081b29', color:'#ededed'}} >
      {children}
    </CartContext.Provider>
  );
};

// Export the CartContext and CartProvider for use in other parts of the application
export { CartContext, CartProvider };
