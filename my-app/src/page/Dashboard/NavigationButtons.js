import React from "react";

export default function NavigationButtons({ navigate }) {
  return (
    <div className="navButtons">
      <button
        id="shopButton"
        className="btn btn-lg btn-primary button"
        type="button"
        onClick={() => navigate("/Slacker-2/drawCard")}
      >
        SHOP
      </button>
      <button
        id="deckButton"
        className="btn btn-lg btn-primary button"
        type="button"
        onClick={() => navigate("/Slacker-2/deckManage")}
      >
        DECK
      </button>
    </div>
  );
}
