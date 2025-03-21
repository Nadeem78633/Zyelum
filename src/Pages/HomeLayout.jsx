import React from "react";
import Header from "../Components/Header/Header";
// import Footer from '../Components/Footer'
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <div component="main">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default HomeLayout;
