import ReactPlayer from "react-player";
import React, { useRef } from "react";
const VIDEO_PATH =
  "https://buyer-video-in.urbanic.com/eva/Urbanic_IN/9728f036deba4c649626bb3d9e6585cf.mp4";
function PlayerComponent() {
  const playerRef = useRef(null);
  return (
    <div>
      <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
    </div>
  );
}
export default PlayerComponent;
