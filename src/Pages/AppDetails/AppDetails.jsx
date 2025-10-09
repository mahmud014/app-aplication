import React from "react";
import { useParams } from "react-router";
import useApps from "../../Hooks/useApps";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewsIcon from "../../assets/icon-review.png";
import { addToStoredDB } from "../../utility/addToDB";
import Loading from "../../Components/Loading/Loading";
import Rechart from "../../Components/ReChart/Rechart";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const findApp = apps.find((app) => app.id === Number(id));
  if (loading) return <Loading />;
  const {
    image,
    title,
    downloads,
    ratingAvg,
    companyName,
    size,
    reviews,
    description,
    ratings,
  } = findApp || {};

  const handleInstall = (id) => {
    addToStoredDB(id);
  };
  return (
    <div className="w-11/12 mx-auto card bg-base-100 shadow-sm p-8">
      <div className="flex flex-col md:flex-row md:items-center gap-10">
        <div className="">
          <img className="max-w-48 object-cover" src={image} alt="Album" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-500 mt-2">
            Developed by:{" "}
            <span className="text-[#39bcf9] font-bold">{companyName}</span>
          </p>
          <div className="divider divider-end"></div>
          <div className="flex items-center gap-10">
            <div>
              <img className="h-8 w-8" src={downloadIcon} />
              <p className="text-gray-500">Downloads</p>
              <h1 className="text-3xl font-bold">{downloads}</h1>
            </div>
            <div>
              <img className="h-8 w-8" src={ratingIcon} />
              <p className="text-gray-500">Average Ratings</p>
              <h1 className="text-3xl font-bold">{ratingAvg}</h1>
            </div>
            <div>
              <img className="h-8 w-8" src={reviewsIcon} />
              <p className="text-gray-500">Total Reviews</p>
              <h1 className="text-3xl font-bold">{reviews}</h1>
            </div>
          </div>
          <div className="my-4">
            <button
              onClick={() => handleInstall(id)}
              className="btn bg-[#00d390] text-white"
            >
              Install Now ({size}MB)
            </button>
          </div>
        </div>
      </div>
      <div className="divider divider-end"></div>
      <div>
        <h1 className="text-xl font-bold">
          <Rechart ratings={ratings} />
        </h1>
      </div>
      <div className="divider divider-end"></div>
      <div>
        <h1 className="text-xl font-bold">Description</h1>
        <p className="whitespace-pre-line text-gray-500 my-4">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
