import React, { useState } from "react";
import Video from "./Video";

const Videos = ({ videos }) => {
  const [muted, setMuted] = useState(true);
  return (
    <div
      className="shorts-wrapper"
      onMouseEnter={() => {
        setMuted(false);
      }}
    >
      {videos.map((video, id) => {
        return <Video video={video} muted={muted} id={id} />;
      })}
    </div>
  );
};

export default Videos;
