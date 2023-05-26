import React, { useState } from "react";

export default function ButtonGroup({
  handleShowDialog,
  handleToggleAudioShowState,
  audioShowState,
  volume,
  setVolume,
}) {
  const [showDialog, setShowDialog] = useState(false); // added this line
  const handleCloseDialog = () => setShowDialog(false); // added this line

  return (
    <div>
      <div className="buttons">
        <span
          href="#"
          id="button1"
          className="button button1"
          onClick={() => setShowDialog(true)} // modified this line
        ></span>
        <div
          className="dialogContainer"
          style={{ display: showDialog ? "block" : "none" }}
        >
          <div className="dialogHeader">
            SLACKER.txt
            <span className="dialogClose" onClick={handleCloseDialog}>
              X
            </span>
          </div>
          <div className="dialogFooter">
            SLACKER © was developed by:
            <br />
            <br />
            Brandon Freaney
            <br />
            Fabio Lima
            <br />
            Jasmine Ha
            <br />
            Kevin Shiels
            <br />
            Siobhan Hardt
            <br />
            Tan Xiaoxu
            <br />
            <br />
            SLACKER © 2023. All rights reserved.
          </div>
        </div>
        <span
          href="#"
          className="button button3"
          onClick={handleToggleAudioShowState}
        ></span>
        <div style={{ display: audioShowState ? "block" : "none" }}>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            className="volume-slider"
            onInput={(e) => {
              setVolume(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
