import React, { useEffect, useState } from "react";
import useApps from "../../Hooks/useApps";
import AppCard from "../../Components/AppCard/AppCard";
import { IoIosSearch } from "react-icons/io";
import ErrorNotFound from "../ErrorPage/ErrorNotFound";
import Loading from "../../Components/Loading/Loading";

const Apps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const term = search.trim().toLowerCase();
  const searchApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  useEffect(() => {
    if (search) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 300); // small delay
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [search]);

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-3xl md:text-5xl font-bold">Our All Applications</h1>
        <p className="font-semibold text-gray-400 my-4">
          Explore All Apps on the Market Development by Us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-bold text-2xl">({searchApps.length}) Apps Found</h1>
        <label className="input">
          <span className="label">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? (
          <div className="col-span-full flex justify-center py-10">
            <Loading />
          </div>
        ) : searchApps.length === 0 ? (
          <p className="text-center col-span-full text-gray-500 text-lg py-10">
            <ErrorNotFound />
          </p>
        ) : (
          searchApps.map((app) => <AppCard key={app.id} app={app} />)
        )}
      </div>
    </div>
  );
};

export default Apps;
