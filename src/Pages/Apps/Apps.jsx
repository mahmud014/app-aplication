import React from "react";
import useApps from "../../Hooks/useApps";
import AppCard from "../../Components/AppCard/AppCard";
import { Link } from "react-router";

const Apps = () => {
  const { apps } = useApps();
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-3xl md:text-5xl font-bold">Our All Applications</h1>
        <p className="font-semibold text-gray-400 my-4">
          Explore All Apps on the Market Development by Us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center mb-5">
        <h1>({apps.length}) Apps Found</h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <div className="flex justify-center items-center p-10"></div>
    </div>
  );
};

export default Apps;
