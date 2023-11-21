// Import React library
// eslint-disable-next-line no-unused-vars
import React from "react";

// Define the Homepage component
const Homepage = () => {
  return (
    <>
      {/* Create a div with a dark background and white text */}
      <div className="bg-dark text-white text-center py-3">
        <br />
        {/* Display a centered title */}
        <h1>𝕃𝕀𝔹ℝ𝔸ℝ𝕐 𝕄𝔸ℕ𝔸𝔾𝔼𝕄𝔼ℕ𝕋 𝕊𝕐𝕊𝕋𝔼𝕄</h1>
        <br />
        {/* Display an image */}
        <div className="img-fluid">
        <img src="https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/WHAT-IS-THE-PURPOSE-OF-A-LIBRARY-MANAGEMENT-SYSTEM-min.png" />
        </div>
        
        <br />
        <br />
      </div>
    </>
  );
};

// Export the Homepage component
export default Homepage;
