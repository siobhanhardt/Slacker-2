import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DrawCard from "./page/DrawCard/Index";
import Dashboard from "./page/Dashboard/Index";
import DeckManage from "./page/DeckManage";
import LoginPage from "./page/Login/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Main component that defines the routing between the different pages

const App = () => (
  <Router>
    {/* Router component to handle the routing between pages */}
    {/* Routes component to define the different routes */}

    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/drawCard" element={<DrawCard />} />
      <Route path="/deckManage" element={<DeckManage />} />
    </Routes>
  </Router>
);
// Get the root element from the HTML

const rootElement = document.getElementById("root");
// Render the `App` component in the root element

createRoot(rootElement).render(<App />);
