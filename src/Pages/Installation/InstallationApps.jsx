import React from "react";
import { IoIosStar } from "react-icons/io";
import { HiOutlineDownload } from "react-icons/hi";
const InstallationApps = ({ app }) => {
  const { image, title, downloads, ratingAvg, size } = app;
  return (
    <div className="shadow-sm my-4">
      <div className="flex justify-between p-4 shadow-sm items-center rounded-lg">
        <div className="flex items-center gap-4">
          <img className="max-w-20" src={image} alt={title} />
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            <div className="flex items-center gap-4 mt-2">
              <p className="flex justify-center items-center gap-1  text-green-500">
                <HiOutlineDownload />
                {downloads}
              </p>
              <p className=" flex justify-center items-center gap-1 text-orange-500 px-2 rounded-lg">
                <IoIosStar />
                {ratingAvg}
              </p>
              <p>{size}MB</p>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-[#00d390] btn text-white">Uninstall</button>
        </div>
      </div>
    </div>
  );
};

export default InstallationApps;
