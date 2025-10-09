import React from "react";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router";
import appNotFound from "../../assets/appNotFound.jpg";
const Errorpage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className=" flex flex-col justify-center items-center min-h-screen bg-[#f5f5f5] px-6 shadow-sm">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <img className="mx-auto" src={appNotFound} />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-600">
              The Page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link to="/">
              <button className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0072ff] to-[#39bcf6] text-white font-medium shadow-md transition">
                Go Home
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Errorpage;
