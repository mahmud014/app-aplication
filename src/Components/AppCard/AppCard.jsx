import React from "react";

import { IoIosStar } from "react-icons/io";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;
  return (
    <div>
      <Link to={`/appdetails/${id}`}>
        <div className="card bg-base-100 shadow-sm p-4 hover:scale-105 transition ease-in-out">
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
      </Link>
    </div>
  );
};

export default AppCard;
