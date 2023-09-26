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
        <img
          src="https://media.istockphoto.com/id/1363779378/photo/online-education-concept.webp?b=1&s=170667a&w=0&k=20&c=LG05Rj-fs_aGgxE6XqPF_wIkNiyxyRlU9A8ngWYqYMk="
          style={{ height: "15cm", width: "39cm" }}
        />
        <br /><br />
      </div>
    </>
  );
};

// Export the Homepage component
export default Homepage;
