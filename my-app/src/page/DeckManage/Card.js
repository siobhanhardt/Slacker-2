import React from "react";
// Functional component that displays a single card

const Card = ({ card, backEmnu }) => {
  return (
    <div className="imgContainer">
      {/* Container for the card */}
      {/* The front of the card */}

      <div
        className="cardFront"
        style={{
          /* Box shadow with color determined by the card's type */
          boxShadow: `0px 0px 8px 7px ${backEmnu[card.rarity]}`,
          /* Transform to rotate the card to the front */
          transform: "rotateY(0deg)",
        }}
      >
        {/* The name of the card */}
        <p className="title">{card.name}</p>
        {/* Container for the card's image, type, and description */}
        <div className="footerCard">
          {/* The image of the card */}
          <img
            className="img"
            width={180}
            src={card.imageUrl}
            alt={card.name}
          />
          {/* The type of the card */}

          <p className="desTitle">{card.type.toUpperCase()}</p>
          {/* The description of the card */}

          <div className="descriptionContainer">
                  <p className="description">{card.description}</p>
                  <hr />
                  <p className="flavour"><i>{card.flavourText}</i></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
