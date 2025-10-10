import React, { useEffect, useState } from "react";
import useApps from "../../Hooks/useApps";
import { getStoredApp } from "../../utility/addToDB";
import InstallationApps from "./InstallationApps";
import Loading from "../../Components/Loading/Loading";

const Installation = () => {
  const { apps, loading } = useApps();
  const [myInstalledApps, setMyInstalledApps] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    if (!apps || apps.length === 0) return;

    const storedApps = getStoredApp();
    const convertedStoredApps = storedApps.map((id) => parseInt(id));
    const InstalledApps = apps.filter((app) =>
      convertedStoredApps.includes(app.id)
    );
    setMyInstalledApps(InstalledApps);
  }, [apps]);

  const handleUninstall = (id) => {
    setMyInstalledApps((prev) => prev.filter((app) => app.id !== id));
  };

  const handleSort = (type) => {
    setSort(type);
    if (type === "size") {
      const sortedBySize = [...myInstalledApps].sort((a, b) => a.size - b.size);
      setMyInstalledApps(sortedBySize);
    }
    if (type === "ratings") {
      const sortedByRatings = [...myInstalledApps].sort(
        (a, b) => a.ratingAvg - b.ratingAvg
      );
      setMyInstalledApps(sortedByRatings);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="text-center my-5">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Your Installed Apps
        </h1>
        <p>Explore All Trending Apps on the Market Developed by us</p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-2xl">
          {myInstalledApps.length} Apps Found
        </h1>
        <select
          value={sort}
          onChange={(e) => handleSort(e.target.value)}
          className="select appearance-none"
        >
          <option value="" disabled>
            Sort By {sort ? sort : ""}
          </option>
          <option value={"size"}>Sort By Size</option>
          <option value={"ratings"}>Sort By Rating</option>
        </select>
      </div>

      <div className="">
        {myInstalledApps.length === 0 ? (
          <p className="text-center text-gray-500 text-lg py-10">
            Not yet installed apps
          </p>
        ) : (
          myInstalledApps.map((app) => (
            <InstallationApps
              key={app.id}
              app={app}
              onUninstall={handleUninstall}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Installation;
