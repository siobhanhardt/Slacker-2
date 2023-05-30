import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./deck.css";
import CardsContainer from "./CardContainer";
import Pagination from "./Pagination";
import api from "../../utils/api";

// Main component that implements the deck of cards
export default function Index() {
  // Hook to allow navigation to other pages in the application
  const navigate = useNavigate();

  // State to keep track of the current page
  const [prevPage, setPrevPage] = useState(0);

  // State to keep track of the current page number
  const [pageNumber, setPageNumber] = useState(1);

  // State to keep track of the number of cards per page
  const [pageSize, setPageSize] = useState(6);

  // State to keep track of the current filter applied to the cards
  const [filter, setFilter] = useState(null);

  // State to keep track of the current sort order of the cards
  const [sort, setSort] = useState(null);

  // State to store the fetched data from the API
  const [cardsData, setCardsData] = useState([]);

  // Object to define the background color for each type of card
  const backEmnu = {
    1: "#86c5d5",
    2: "#ddc585",
    3: "#86c5d5",
    4: "#be8fd3",
  };

  // State to keep track of the filtered and sorted list of cards
  const [cardLists, setCardLists] = useState([]);

  // Fetch the data from the API
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    api
      .findDeckCards({
        email: user,
      })
      .then((res) => {
        if (res.code === 1) {
          setCardsData([...res.cards]);
        }
      });
  }, []);

  // Use the useEffect hook to filter and sort the cards whenever the relevant state changes
  useEffect(() => {
    // Create a copy of the cardsData array
    let handerArray = [...cardsData];

    // Get a slice of the copied array based on the current page number and page size
    let handerData = [...handerArray.splice(prevPage * pageSize, pageSize)];

    // If a filter is applied, filter the data accordingly
    if (filter) {
      if (filter !== "all") {
        handerData = handerData.filter((card) => card.type === filter);
      }
    }

    // If a sort order is applied, sort the data accordingly
    if (sort === "asc") {
      handerData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "desc") {
      handerData.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Update the cardLists state with the filtered and sorted data
    setCardLists(handerData);
  }, [pageSize, pageNumber, prevPage, filter, sort, cardsData]);

  // Render the component
  return (
    <div className="wrapper">
      {/* Main container for the component */}
      <div className="window">
        {/* Title bar for the component */}
        <div className="title-bar">
          <span className="title">Deck</span>
        </div>
        {/* Menu bar for the component */}
        <div className="menu-bar">
          <ul className="menu">
            {/* Button to navigate back */}
            <li
              onClick={() => {
                navigate("/Slacker-2/dashboard");
              }}
            >
              Back
            </li>
            {/* Select element to sort the cards */}
            <li>
              <select
                onChange={(e) => {
                  setSort(e.target.value);
                }}
              >
                <option value="default">Sort</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>
            </li>
            {/* Select element to filter the cards */}
            <li>
              <select
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              >
                <option value="all">Filter</option>
                <option value="Standard">Standard</option>
                <option value="Versus">Versus</option>
                <option value="Skill Check">Skill Check</option>
                <option value="Instant">Instant</option>
              </select>
            </li>
          </ul>
        </div>
        {/* Content area for the cards */}
        <div className="content">
          <CardsContainer cardLists={cardLists} backEmnu={backEmnu} />
        </div>
        {/* Pagination component */}
        <Pagination prevPage={prevPage} setPrevPage={setPrevPage} />
      </div>
    </div>
  );
}
