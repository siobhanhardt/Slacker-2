// Imports

import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import AudioButton from "./AudioButton";
import DialogBox from "./DialogBox";
import NavigationButtons from "./NavigationButtons";
import CashDisplay from "./CashDisplay";
import Background from "./Background";
import Logo from "./Logo";

// Back audio
const audio = require("./audio/sfslapbass.mp3");

export default function Index() {
  // State
  const [showDialog, setShowDialog] = useState(false);
  const [volume, setVolume] = useState(1);

  // Ref
  const radioRef = useRef();

  // Navigate
  const navigate = useNavigate();

  // Effects
  useEffect(() => {
    radioRef.current.volume = volume;
  }, [volume]);
  useEffect(() => {
    radioRef.current.play();
  }, []);

  return (
    <div className="WebContainer">
      <Background />
      <Logo />
      <div className="buttons">
        <button
          id="button1"
          className="button button1"
          onClick={() => setShowDialog(true)}
        ></button>
        <DialogBox showDialog={showDialog} setShowDialog={setShowDialog} />
        <AudioButton
          audio={audio}
          volume={volume}
          setVolume={setVolume}
          radioRef={radioRef}
        />
      </div>
      {<CashDisplay cash={1200} />}
      <NavigationButtons navigate={navigate} />
      <audio
        style={{ visibility: "hidden" }}
        ref={radioRef}
        src={audio}
        loop
        controls
      ></audio>
    </div>
  );
}
