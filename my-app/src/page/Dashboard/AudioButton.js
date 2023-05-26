import React, { useState } from "react";

export default function AudioButton({
  audio,
  volume,
  setVolume,
  radioRef,
}) {
  const [audioShowState, setAudioShowState] = useState(false);

  const handleDoubleClick = () => {
    radioRef.current.pause();
  };

  return (
    <>
      <button
        className="button button3"
        onClick={() => {
          setAudioShowState(!audioShowState);
          if (radioRef.current.pause) {
            radioRef.current.play();
          }
        }}
        onDoubleClick={handleDoubleClick}
      ></button>
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
      <audio
        style={{ visibility: "hidden" }}
        ref={radioRef}
        src={audio}
        loop
        controls
      ></audio>
    </>
  );
}
