import React, { useEffect, useRef, useState } from "react";
import "./drawcard.css";
import { getRandomCard } from "../../utils/index";
import { useNavigate } from "react-router-dom";
import CardDisplay from "./CardDisplay";
import ButtonContainer from "./ButtonContainer";
import backButtonImage from "../../asstes/back.png";
import api from "../../utils/api";

let backGlow = {
  1: "#86c5d5",
  2: "#ddc585",
  3: "#6AC05C",
  4: "#be8fd3",
};

export default function Index() {
  let navigate = useNavigate();
  let cardContainer = useRef();
  const [showImg, setShowImg] = useState([]);
  let [state, setState] = useState(null);
  const [cardsRevealed, setCardsRevealed] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    setCardsRevealed(false);
    setFlippedCards([]);
  }, [showImg]);

  const buttonHander = async (count) => {
    setAnimationTriggered(false);
    setTimeout(() => {
      setAnimationTriggered(true);
    }, 50);

    try {
      let cardsToShow = await getRandomCard(count);
      console.log(cardsToShow); // Add this line to print the data to the console

      setState(count);
      setShowImg(cardsToShow);
    } catch (error) {
      console.error(`Error fetching random cards: ${error}`);
    }
  };

  const revealCards = () => {
    setCardsRevealed(true);
    Array.prototype.forEach.call(
      cardContainer.current.children,
      (item, index) => {
        setTimeout(() => {
          item.children[0].style.transform = "rotateY(0deg)";
          item.children[1].style.transform = "rotateY(-180deg)";
        }, 500 * index);
      }
    );
    // add the reveal functionality
    let user = JSON.parse(localStorage.getItem("user"));
    console.log("User is", user.email);
    if (user) {
      console.log("pushing cards");
      api
        .uploadCard({
          cardList: showImg,
          email: user,
        })
        .then((res) => {
          if (res.code === 1) {
            console.log("Card uploaded successfully");
          }
        })
        .catch((error) => {
          console.error("Failed to upload card", error);
        });
    } else {
      navigate("/");
    }
  };

  const revealCard = (index) => {
    if (!cardsRevealed) {
      const card = cardContainer.current.children[index];
      card.children[0].style.transform = "rotateY(0deg)";
      card.children[1].style.transform = "rotateY(-180deg)";
      setFlippedCards([...flippedCards, index]);
    }
  };

  return (
    <section className="back">
      {state && (
        <CardDisplay
          cardContainer={cardContainer}
          showImg={showImg}
          backGlow={backGlow}
          animationTriggered={animationTriggered}
          cardsRevealed={cardsRevealed}
          revealCard={revealCard}
        />
      )}

      {state && !cardsRevealed && (
        <button className="reveal-button" onClick={revealCards}>
          REVEAL <br />
          CARDS
        </button>
      )}
      <button
        className="back-button"
        onClick={() => {
          navigate("/Slacker-2/dashboard");
        }}
      >
        <img src={backButtonImage} alt="Go Back" />
      </button>
      <ButtonContainer buttonHandler={buttonHander} />
    </section>
  );
}
