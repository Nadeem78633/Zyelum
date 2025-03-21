import React from "react";
import Home from "./Pages/Home";
import HomeLayout from "./Pages/HomeLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    // errorElement: <Error />,
    children: [{ index: true, path: "/", element: <Home /> }],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
