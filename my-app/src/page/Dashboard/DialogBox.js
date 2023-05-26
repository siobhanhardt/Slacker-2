import React from "react";

export default function DialogBox({ showDialog, setShowDialog }) {
  return (
    <div
      className="dialogContainer"
      style={{ display: showDialog ? "block" : "none" }}
    >
      <div className="dialogHeader">
        SLACKER.txt
        <span className="dialogClose" onClick={() => setShowDialog(false)}>
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
  );
}
