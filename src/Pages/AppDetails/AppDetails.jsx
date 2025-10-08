import React from "react";
import { useParams } from "react-router";
import useApps from "../../Hooks/useApps";
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosStar } from "react-icons/io";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const findApp = apps.find((app) => app.id === Number(id));
  if (loading) return <p>Loading....</p>;
  const { image, title, downloads, ratingAvg } = findApp;
  return (
    <div className="w-11/12 mx-auto card bg-base-100 shadow-sm p-4">
      <figure className="h-52 overflow-hidden rounded-2xl">
        <img
          className="max-w-48 object-cover rounded-full"
          src={image}
          alt="Album"
        />
      </figure>
      <div>
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center my-2">
          <div className="flex justify-center items-center gap-2 bg-green-100 text-green-700 px-2 rounded-lg">
            <HiOutlineDownload />
            {downloads}
          </div>
          <div className="flex justify-center items-center gap-2 bg-orange-100 text-orange-700 px-2 rounded-lg">
            <IoIosStar />
            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
