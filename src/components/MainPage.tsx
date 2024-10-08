import React from "react";
import videoSrc from "../assets/bg2.mp4";

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
