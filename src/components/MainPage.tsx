import React from "react";
import videoSrc from "../assets/bg.mp4";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <div className="video-background-container">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
        ></video>
        <div className="container">
          <div>
            <ul className="header-list-container">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#ach">Achievements</a>
              </li>
            </ul>
          </div>
          <div className="title">
            <h1>Rohit Bharmal</h1>
            <p>
              Software Engineer{" "}
              <a
                href="https://www.redhat.com/en"
                target="_blank"
                className="rhLinkText"
              >
                @Red Hat
              </a>{" "}
              | Open Source Contributer | Mentor
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
