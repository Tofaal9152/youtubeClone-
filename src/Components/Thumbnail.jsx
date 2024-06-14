<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import thumbnaill from "../assets/thumbnaill.jpg";
import jack from "../assets/jack.png";
import axios from "axios";
import { API_KEY } from "../Api/youtube";
import { Link } from "react-router-dom";


// const YOUTUBE_CHANNEl_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${API_KEY}`;
const Thumbnail = ({ ChannelThings }) => {
  const YOUTUBE_CHANNEl_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${ChannelThings.snippet.channelId}&key=${API_KEY}`;

  const [icon, seticon] = useState("");


  const YoutubeChannelProfilePicture = async () => {
    try {
      const res = await axios.get(YOUTUBE_CHANNEl_API);
      // console.log(res.data.items[0].snippet.thumbnails.medium.url);
      seticon(res.data.items[0].snippet.thumbnails.medium.url);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    YoutubeChannelProfilePicture();
  }, []);

  return (
    <>
      <div className="flex flex-col space-y-4">
        <Link to={`/videoPlay?v=${ChannelThings.id}`}>
          <img
            className="rounded-xl cursor-pointer"
            src={ChannelThings.snippet.thumbnails.medium.url}
            alt="thumbnail_of_JujutsuKaisen"
          />
        </Link>
        <div className="flex space-x-3">
          <img
            className="rounded-[50%]  w-[2.5rem] h-[2.5rem] object-cover cursor-pointer"
            src={icon}
            alt="User Avatar"
          />
          <div className="flex flex-col space-y-1">
            <h1 className="heading font-semibold cursor-pointer">
              {ChannelThings.snippet.title}
            </h1>
            <p className="ChannelName text-sm text-gray-500 font-normal cursor-pointer">
              {ChannelThings.snippet.channelTitle}
            </p>
            <div>
              <p className="flex ChannelThingss-center space-x-2 text-gray-600">
                <span>3.6K views</span>
                <span>•</span>
                <span>3 months ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
=======
import React, { useEffect, useState } from "react";
import thumbnaill from "../assets/thumbnaill.jpg";
import jack from "../assets/jack.png";
import axios from "axios";
import { API_KEY } from "../Api/youtube";
import { Link } from "react-router-dom";


// const YOUTUBE_CHANNEl_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${API_KEY}`;
const Thumbnail = ({ ChannelThings }) => {
  const YOUTUBE_CHANNEl_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${ChannelThings.snippet.channelId}&key=${API_KEY}`;

  const [icon, seticon] = useState("");


  const YoutubeChannelProfilePicture = async () => {
    try {
      const res = await axios.get(YOUTUBE_CHANNEl_API);
      // console.log(res.data.items[0].snippet.thumbnails.medium.url);
      seticon(res.data.items[0].snippet.thumbnails.medium.url);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    YoutubeChannelProfilePicture();
  }, []);

  return (
    <>
      <div className="flex flex-col space-y-4">
        <Link to={`/videoPlay?v=${ChannelThings.id}`}>
          <img
            className="rounded-xl cursor-pointer"
            src={ChannelThings.snippet.thumbnails.medium.url}
            alt="thumbnail_of_JujutsuKaisen"
          />
        </Link>
        <div className="flex space-x-3">
          <img
            className="rounded-[50%]  w-[2.5rem] h-[2.5rem] object-cover cursor-pointer"
            src={icon}
            alt="User Avatar"
          />
          <div className="flex flex-col space-y-1">
            <h1 className="heading font-semibold cursor-pointer">
              {ChannelThings.snippet.title}
            </h1>
            <p className="ChannelName text-sm text-gray-500 font-normal cursor-pointer">
              {ChannelThings.snippet.channelTitle}
            </p>
            <div>
              <p className="flex ChannelThingss-center space-x-2 text-gray-600">
                <span>3.6K views</span>
                <span>•</span>
                <span>3 months ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
