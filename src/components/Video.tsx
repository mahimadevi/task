import React from "react";

const Video: React.FC = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <video
        src="/svideo.mp4"
        controls
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default Video;
