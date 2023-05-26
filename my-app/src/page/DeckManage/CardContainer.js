import React from "react";
import Card from "./Card";
// Functional component that displays a list of cards
const CardsContainer = ({ cardLists, backEmnu }) => {
  return (
    <div className="cardContainer">
      {/* Container for the list of cards */}
      {/* Map through the list of cards and render a Card component for each card
       */}
      {cardLists.map((item) => (
        <Card key={item.id} card={item} backEmnu={backEmnu} />
      ))}
    </div>
  );
};

export default CardsContainer;
