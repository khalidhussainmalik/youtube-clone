import React from "react";
import "../pages/VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow-text">
        <h3>{title}</h3>
        <p className="videoRow-headline">
          {channel}. <span className="videoRow-subs"><span className="videoRow-subsNumber">{subs}</span> subscribers</span> {views} views . {timestamp}
        </p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
