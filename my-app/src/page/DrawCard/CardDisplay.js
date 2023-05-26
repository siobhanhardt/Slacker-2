import React, { useState, useEffect, useMemo } from 'react';

const CardDisplay = ({ cardContainer, showImg, backGlow, animationTriggered, cardsRevealed, revealCard }) => {
  const defaultPositions = useMemo(() => Array(showImg.length).fill({ top: "100%", left: "0", scale: 0 }), [showImg.length]);

  const initialTargetPositions = useMemo(() => [
    { top: "25%", left: "20vw", scale: 1 },
    { top: "25%", left: "23vw", scale: 1 },
    { top: "25%", left: "26vw", scale: 1 },
    { top: "50%", left: "27vw", scale: 1 },
    { top: "50%", left: "30vw", scale: 1 },
    // add more positions if needed
  ], []);

  const [cardPositions, setCardPositions] = useState(defaultPositions);

  useEffect(() => {
    if (!animationTriggered) {
      setCardPositions(defaultPositions);
    } else {
      const animateCards = async () => {
        for (let index = 0; index < showImg.length; index++) {
          await new Promise((resolve) => {
            setTimeout(() => {
              setCardPositions((prevPositions) => {
                const newPositions = [...prevPositions];
                newPositions[index] = initialTargetPositions[index];
                return newPositions;
              });
              resolve();
            }, 500); // adjust this time for a longer/shorter delay
          });
        }
      };
      animateCards();
    }
  }, [animationTriggered, showImg, defaultPositions, initialTargetPositions]);

  return (
    <div className="cardContainer" ref={cardContainer}>
      {showImg.map((item, index) => (
        <div
          key={`${item.id}-${index}`} // unique key here
          onClick={() => revealCard(index)}
          className={`draw-imgContainer${animationTriggered ? " card-entry" : ""}`}
          style={{
            top: cardPositions[index].top,
            left: cardPositions[index].left,
            transform: `scale(${cardPositions[index].scale})`,
            zIndex: 1
          }}
        >
          <div
            className="cardFront"
            style={{
              boxShadow: `0px 0px 8px 7px ${backGlow[item.rarity]}`,
              transform: cardsRevealed ? "rotateY(-180deg)" : "",
              transition: cardsRevealed ? "transform 500ms" : "",
            }}
          >
            <p className="title">{item.name}</p>
            <div className="footerCard">
              <img
                className="img"
                width={180}
                src={item.imageUrl}
                alt={item.name}
              />
              <p className="desTitle">
                {item.type ? item.type.toUpperCase() : ""}
              </p>
              <div className="descriptionContainer">
                  <p className="description">{item.description}</p>
                  <hr />
                  <p className="flavour"><i>{item.flavourText}</i></p>
              </div>
            </div>
          </div>
          <div
            className="cardBack"
            style={{
              transform: cardsRevealed ? "" : "rotateY(0)",
              transition: cardsRevealed ? "" : "transform 500ms",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default CardDisplay;