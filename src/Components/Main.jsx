import React from "react";
import MainTopButton from "./MainTopButton";
import MainCard from "./MainCard";

const Main = () => {
  return (
    <>
      <div className="flex flex-col">
        <MainTopButton />
        <MainCard />
      </div>
    </>
  );
};

export default Main;
