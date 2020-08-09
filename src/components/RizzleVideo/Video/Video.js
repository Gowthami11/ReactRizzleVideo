import React, { useEffect } from "react";
import sampleimage from "../../../images/loader.gif";
import { videodata1 } from "../../../VideoData/jsondata";
import videocss from "./Video.module.css";
const Videosrc = ({ source }) => {
  let src;

  useEffect(() => {
    videodata1.forEach((video) => {
      const src = (
        <video>
          <source src={video.video.originalUrl} />
        </video>
      );
    });
  }, [source]);
  return (
    <div>
      <video
        className={videocss.video}
        autoPlay
        width="20000"
        height="710"
        poster={sampleimage}
        controls=""
        // poster="data:image/gif,AAAA"
      >
        <source src={source} type="video/mp4" />
      </video>
    </div>
  );
};

export default Videosrc;
