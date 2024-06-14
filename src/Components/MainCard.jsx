import React, { useEffect, useState } from "react";
import axios from "axios";
import YOUTUBE_VIDEO_API from "../Api/youtube";
import { API_KEY } from "../Api/youtube";
import { BASE_URL } from "../Api/youtube";
import Thumbnail from "./Thumbnail";

const MainCard = () => {
  const [video, setvideo] = useState([]);
  // API CAlL
  const FetchingYoutubeVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      setvideo(res?.data?.items);
      // console.log(res?.data?.items[0]);      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchingYoutubeVideo();
  }, []);

  return (
    <>
      {" "}
      <div className="grid grid-cols-3 gap-3 mr-3 mt-5">
        {video.map((item,index) => {
          return <Thumbnail ChannelThings={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default MainCard;
