import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import jack from "../assets/jack.png";
import { API_KEY } from "../Api/youtube";
import axios from "axios";
import { useEffect } from "react";

const VideoPlay = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [singleVideo, setsingleVideo] = useState("");
  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );

      setsingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleVideo();
  }, []);
  return (
    <>
      {/* Left */}
      <div className="Left flex flex-col space-y-4 w-[853px]">
        <iframe
          className="rounded-xl"
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${videoId}?si=Qidb4-CLK7P9cR9D?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="font-semibold">{singleVideo?.snippet?.title}</h1>
        <div className="flex justify-between">
          <div className="left flex space-x-3 ">
            <img
              className="rounded-[50%]  w-[2.5rem] h-[2.5rem] object-cover cursor-pointer"
              src={jack}
              alt="User Avatar"
            />
            <div>
              <p className="font-semibold cursor-pointer">
                {singleVideo?.snippet?.channelTitle}
              </p>
              <p className="text-gray-500 cursor-pointer">3.51K subscribers</p>
            </div>
            <button className=" bg-black hover:bg-[#272727] text-white font-semibold  py-2 px-4 border rounded-full">
              Subscribe
            </button>
          </div>
          <div className="right flex space-x-3 justify-center items-center ">
            <div className="flex cursor-pointer justify-between items-center bg-[#F2F2F2] hover:bg-[#E5E5E5]  text-black font-semibold px-2 py-1 rounded-md space-x-3">
              <AiOutlineLike size={23} />
              <BiDislike size={23} />
            </div>
            <div className="bg-[#F2F2F2] cursor-pointer hover:bg-[#E5E5E5] space-x-2  text-black font-semibold px-2 py-1 rounded-md flex justify-between items-center">
              <IoIosShareAlt size={23} /> <span>Share</span>
            </div>
            <div className="bg-[#F2F2F2] cursor-pointer hover:bg-[#E5E5E5] space-x-2  text-black font-semibold px-2 py-1 rounded-md flex justify-between items-center">
              <BsDownload size={20} />
              <span>Download</span>
            </div>
          </div>
        </div>
      </div>
      {/* Right */}
    </>
  );
};

export default VideoPlay;
