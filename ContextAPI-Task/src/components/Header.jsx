// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../ContextAPI/CartContext";

// Define the Header component
const Header = () => {
  // Access the CartContext using the useContext hook to get cart data
  const { cart } = useContext(CartContext);

  return (
    <div>
      {/* Create a navigation menu */}
      <ul className="nav">
        {/* Define a link to the home page */}
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <h3> Home Pages</h3>
          </NavLink>
        </li>

        {/* Define a link to the cart page */}
        <li>
          <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            {/* Display "Cart" and the number of items in the cart */}
            <h3>Cart <span>({cart.length})<i className="fa-solid fa-cart-shopping fa-fade" ></i></span></h3>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

// Export the Header component as the default export
export default Header;
