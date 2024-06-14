import React from "react";

const MainTopButton = () => {
  const btnArray = [
    "All",
    "About",
    "News",
    "Music",
    "Api",
    "Games",
    "Music",
    "Video",
    "About",
    "News",
    "Music",
    "Api",
    "Games",
    "Music",
    "Video",
    "Games",
    "Music",
    
  ];
  return (
    <div className="">
      {btnArray.map((item, index) => {
        return (
          <button
            key={index}
            className="px-2 m-1 py-1 font-semibold bg-gray-200 rounded-md"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default MainTopButton;
