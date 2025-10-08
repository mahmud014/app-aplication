import React from "react";
import heroImg from "../../assets/hero.png";
import { Link } from "react-router";
import googlePlay from "../../assets/google-play.png";
import appStore from "../../assets/app-store.png";
const Hero = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-center">
            We Build <br />{" "}
            <span className="bg-gradient-to-r from-[#0072ff] to-[#39bcf6] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="text-center text-gray-500 font-semibold my-5">
            Build modern web and desktop apps with speed and precision.
            QuantumCode provides an intuitive environment, seamless integration,
            and powerful tools for developers of all levels.
          </p>
        </div>
        <div className="my-5 flex flex-row gap-10 justify-center items-center">
          <Link>
            <button className="btn">
              <img className="h-5 w-5" src={googlePlay} /> Google Play
            </button>
          </Link>
          <Link>
            <button className="btn">
              <img className="h-5 w-5" src={appStore} /> App Store
            </button>
          </Link>
        </div>
        <div>
          <img src={heroImg} alt="Hero Image" />
        </div>
      </div>
      <div className="p-8 bg-gradient-to-t from-[#39bcf6] to-[#0072ff] text-white">
        <h1 className="text-3xl font-bold text-center">
          Trusted By Millions, Built For You
        </h1>
        <div className="my-5 flex flex-col md:flex-row justify-center items-center gap-10">
          <div>
            <p className="text-xl font-bold">Total Downloads</p>
            <h1 className="my-3 text-5xl font-bold">29.6M</h1>
            <p>21% More Than last Month</p>
          </div>
          <div>
            <p className="text-xl font-bold">Total Reviews</p>
            <h1 className="my-3 text-5xl font-bold">906K</h1>
            <p>46% More Than last Month</p>
          </div>
          <div>
            <p className="text-xl font-bold">Active apps</p>
            <h1 className="my-3 text-5xl font-bold">132+</h1>
            <p>31 More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
