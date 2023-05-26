import React from "react";

// A functional component to display the pagination
const Pagination = ({ prevPage, setPrevPage }) => {
  return (
    // A div container for the pagination at the bottom
    <div className="bottom">
      {/* A div container for the arrow buttons */}
      <div className="arrow-container">
        {/* A div container for the left arrow button */}
        <div
          className="arrow left"
          onClick={() => {
            // If the previous page number is less than 0, don't do anything
            if (prevPage < 0) {
              return;
            }
            setPrevPage(prevPage - 1); // Call the setPrevPage function with the previous page number decreased by 1
          }}
        ></div>
        {/* A div container for the right arrow button */}
        <div
          className="arrow right"
          onClick={() => {
            setPrevPage(prevPage + 1); // Call the setPrevPage function with the previous page number increased by 1
          }}
        ></div>
      </div>
    </div>
  );
};

export default Pagination; // Exporting the component
