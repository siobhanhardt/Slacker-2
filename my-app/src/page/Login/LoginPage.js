import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
let leftImg = require("./img/runningguy1.png");
let rightImg = require("./img/runningguy2.png");
const audio = require("./audio/background_v01.mp3");

export default function LoginPage() {
  let [volume, setVolume] = useState(0.02);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  let [audioShowState, setAudioShowState] = useState(false);
  let radioRef = useRef();

  useEffect(() => {
    radioRef.current.play();
    radioRef.current.volume = volume;
  }, [volume]);
  return (
    <div className="login">
      <img src={leftImg} className="peopleImg my_right"></img>
      <img src={rightImg} className="peopleImg my_left "></img>
      <div className="buttons">
        <span
          href="#"
          id="button1"
          className="button button1"
          onClick={() => {
            setShowDialog(true);
          }}
        ></span>
        <div
          className="dialogContainer"
          style={{ display: showDialog ? "block" : "none" }}
        >
          <div className="dialogHeader">
            SLACKER.txt
            <span
              className="dialogClose"
              onClick={() => {
                setShowDialog(false);
              }}
            >
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
          onClick={() => {
            setAudioShowState(!audioShowState);
            if (radioRef.current.pause) {
              radioRef.current.play();
            }
          }}
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
      <div className="center_two">
        <div className="centerItem">
          <p>Login</p>
          <label htmlFor="email">email：</label>
          <input
            type="text"
            value={email}
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password">password：</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={() => {
              api
                .login({
                  email,
                  password,
                })
                .then(({ code, user }) => {
                  if (code === 1) {
                    localStorage.setItem("user", JSON.stringify(user));
                    console.log(localStorage.getItem("user"));
                    radioRef.current.play();
                    navigate("/dashboard");
                  } else if (code === 0) {
                    console.log("error");
                  }
                })
                .catch((error) => {
                  if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log("Response Data:", error.response.data);
                    console.log("Response Status:", error.response.status);
                    console.log("Response Headers:", error.response.headers);
                  } else if (error.request) {
                    // The request was made but no response was received
                    // error.request is an instance of XMLHttpRequest in the browser
                    console.log("Request:", error.request);
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error Message:", error.message);
                  }
                  console.log("Config:", error.config);
                });
            }}
          >
            Sign In
          </button>
        </div>
      </div>

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
