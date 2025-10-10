import React from "react";
import Hero from "../Hero/Hero";
import { Link } from "react-router";
import AppCard from "../../Components/AppCard/AppCard";
import useApps from "../../Hooks/useApps";
import Loading from "../../Components/Loading/Loading";
import Errorpage from "../ErrorPage/Errorpage";

const Home = () => {
  const { apps, loading, error } = useApps();
  if (loading)
    return (
      <p className="text-center p-10">
        <Loading />
      </p>
    );
  if (error)
    return (
      <p className="text-center p-10 text-red-500">
        <Errorpage />
      </p>
    );
  const homeApps = apps.slice(8, 16) || [];
  return (
    <div>
      <Hero />
      <div className="w-11/12 mx-auto">
        <div className="text-center p-10">
          <h1 className="text-3xl md:text-5xl font-bold">Trending Apps</h1>
          <p className="font-semibold text-gray-400 my-4">
            Explore All Trending Apps on the Market Development by Us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {homeApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="flex justify-center items-center p-10">
          <Link to="/apps">
            <button className="btn shadow-none bg-gradient-to-r from-[#0072ff] to-[#39bcf6] text-white border-none hover:from-[#39bcf6] hover:to-[#0072ff] px-10">
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
