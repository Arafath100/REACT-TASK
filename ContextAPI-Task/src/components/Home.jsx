// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import SingleProduct from "./SingleProduct";
import { CartContext } from "../ContextAPI/CartContext";

// Define the Home component
function Home() {
  // Access the products data from the CartContext using the useContext hook
  const { products } = useContext(CartContext);

  return (
    <div className="productContainer">
      <div>
        <div>
          {/* Map over the products and render SingleProduct components */}
          {products.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Export the Home component as the default export
export default Home;
