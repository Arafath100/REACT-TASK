// Import necessary dependencies and components
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FaUserEdit, FaUsers } from "react-icons/fa";
import { ImBook, ImBooks } from "react-icons/im";

// Define the Header component
const Header = () => {
  return (
    // Create a responsive Navbar component
    <Navbar expand="lg" style={{ backgroundColor: "#2e3956" }}>
      {/* Navbar Brand with a link to the home page */}
      <Navbar.Brand as={Link} to="/" className="text-uppercase" style={{ color: "white", marginRight: "80px" }}>
        Library Management System
      </Navbar.Brand>

      {/* Navbar Toggle Button for mobile view */}
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ml-auto">
          {/* Navigation link to Add Author page */}
          <Nav.Item style={{ marginRight: "80px" }}>
            <Nav.Link as={Link} to="/Author" className="text-uppercase" style={{ color: "white" }}>
              <FaUserEdit /> Add Author
            </Nav.Link>
          </Nav.Item>

          {/* Navigation link to Add Book page */}
          <Nav.Item style={{ marginRight: "80px" }}>
            <Nav.Link as={Link} to="/Books" className="text-uppercase" style={{ color: "white" }}>
              <ImBook /> Add Book
            </Nav.Link>
          </Nav.Item>

          {/* Navigation link to Authors Collection page */}
          <Nav.Item style={{ marginRight: "80px" }}>
            <Nav.Link as={Link} to="/AuthorPage" className="text-uppercase" style={{ color: "white" }}>
              <FaUsers /> Authors Collection
            </Nav.Link>
          </Nav.Item>

          {/* Navigation link to Books Collection page */}
          <Nav.Item>
            <Nav.Link as={Link} to="/BooksPage" className="text-uppercase" style={{ color: "white" }}>
              <ImBooks /> Books Collection
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

// Export the Header component
export default Header;
