import React from "react";
import deckButtonImage from "../../asstes/deck.png";

// A functional component to display the button container
const ButtonContainer = ({ buttonHandler }) => {
  return (
    // A div container for the button group
    <div className="lotteryContainer">
      <button
        className="my_button"
        onClick={() => {
          buttonHandler(5); // Call the button handler function with an argument of 5
        }}
      >
        <img src={deckButtonImage} alt="Open Pack" />
      </button>
    </div>
  );
};

export default ButtonContainer; // Exporting the component
