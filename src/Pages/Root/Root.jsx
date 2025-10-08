import React from "react";
import Navbar from "../../Components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-base-200">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
