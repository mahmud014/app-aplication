import React, { useEffect, useState } from "react";
import useApps from "../../Hooks/useApps";
import { getStoredApp } from "../../utility/addToDB";
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosStar } from "react-icons/io";
import InstallationApps from "./InstallationApps";

const Installation = () => {
  const { apps, loading } = useApps();
  const [myInstalledApps, setMyInstalledApps] = useState([]);

  useEffect(() => {
    if (!apps || apps.length === 0) return;

    const storedApps = getStoredApp();
    const convertedStoredApps = storedApps.map((id) => parseInt(id));
    const InstalledApps = apps.filter((app) =>
      convertedStoredApps.includes(app.id)
    );
    setMyInstalledApps(InstalledApps);
  }, [apps]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (myInstalledApps.length === 0) {
    return (
      <div className="w-11/12 mx-auto mt-10 text-center text-gray-600">
        <h1 className="text-2xl font-semibold mb-4">Installed Apps</h1>
        <p>No apps installed yet.</p>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="text-center my-5">
        <h1 className="text-4xl  font-bold mb-6 text-gray-800">
          Your Installed Apps
        </h1>
        <p>Explore All Trending Apps on the Market Developed by us</p>
      </div>

      <div className="">
        {myInstalledApps.map((app) => (
          <InstallationApps key={app.id} app={app}></InstallationApps>
        ))}
      </div>
    </div>
  );
};

export default Installation;
