import React from "react";
import Navbar from "./Components/Navbar";
import VideoPlay from "./Components/VideoPlay";
import Main from "./Components/Main";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AppBody from "./Components/AppBody";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppBody />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/videoPlay",
          element: <VideoPlay />,
        },
      ],
    },
  ]);

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
