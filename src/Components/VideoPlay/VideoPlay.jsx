import React, { useRef } from "react";
import "./VideoPlay.css";
import youtube from "../../assets/youtube.mp4";

const VideoPlay = ({ isPlaying, setIsPlaying }) => {
  const videoPlayer = useRef(null);
  const stopVideo = useRef(null);

  const closePlayer = (e) => {
    if (e.target === videoPlayer.current) {
      stopVideo.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={`video-player ${isPlaying ? "" : "hide"} `}
      ref={videoPlayer}
      onClick={closePlayer}
    >
      <video src={youtube} autoPlay muted controls ref={stopVideo}></video>
    </div>
  );
};

export default VideoPlay;
