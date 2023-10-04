// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"; 
import Home from "./components/Home"; 
import Cart from "./components/Cart"; 
import { CartProvider } from "./ContextAPI/CartContext"; 
import "./App.css"; 

function App() {
  return (
    <div className="App">
      <CartProvider> {/* Wrap the entire application with CartProvider to provide cart state */}
        <Header /> {/* Render the Header component */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Render the Home component when the path is '/' */}
          <Route path="/cart" element={<Cart />} /> {/* Render the Cart component when the path is '/cart' */}
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App; 
