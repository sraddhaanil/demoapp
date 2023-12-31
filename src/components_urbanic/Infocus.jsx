import React from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";
import "./Infocus.css";

const Infocus = () => {
  const VIDEO_PATH =
    "https://video-product.urbanic.com/invoice-file/189aeb41e1ef45ff84a4ce32f0735820";

  const playerRef = useRef(null);

  const handleClick = () => {
    // Open an external URL in the same window
    window.location.href = "https://in.urbanic.com/activity/pullovers-3564";
  };

  return (
    <div className="infocus-comp" onClick={handleClick}>
      <img
        src="https://img101.urbanic.com/v1/goods-pic/8427dbd73fdd4e239fde6ae28aee77a3UR.webp"
        alt="img-1"
        className="infocus-comp-img"
      />

      {/* Video Player */}
      <div className="infocus-video-player">
        <ReactPlayer
          ref={playerRef}
          url={VIDEO_PATH}
          controls={true}
          playing={true}
          muted={true}
          loop={true}
          width="100%"
          height="70%"
        />
      </div>

      <div className="infocus-com-content"></div>
    </div>
  );
};

export default Infocus;
