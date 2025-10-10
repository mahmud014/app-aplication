import React, { useState, useEffect } from "react";
import useApps from "../../Hooks/useApps";
import AppCard from "../../Components/AppCard/AppCard";
import { IoIosSearch } from "react-icons/io";
import ErrorNotFound from "../ErrorPage/ErrorNotFound";
import Loading from "../../Components/Loading/Loading";
import Errorpage from "../ErrorPage/Errorpage";

const Apps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const term = search.trim().toLowerCase();

  useEffect(() => {
    setSearchLoading(true);
    const timer = setTimeout(() => {
      setSearchLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  if (loading) return <Loading />;
  if (error)
    return (
      <p className="text-center text-red-500 py-10">
        <Errorpage />
      </p>
    );

  const searchApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-3xl md:text-5xl font-bold">Our All Applications</h1>
        <p className="font-semibold text-gray-400 my-4">
          Explore All Apps on the Market Developed by Us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center mb-5">
        <h1 className="font-bold text-2xl">({searchApps.length}) Apps Found</h1>
        <label className="input flex items-center">
          <span className="text-gray-400">
            <IoIosSearch />
          </span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps..."
          />
        </label>
      </div>

      {searchLoading ? (
        <div className="flex justify-center py-10">
          <Loading />
        </div>
      ) : searchApps.length === 0 ? (
        <p className="text-center col-span-full text-gray-500 text-lg py-10">
          <ErrorNotFound />
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {searchApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
