import React from "react";
import Navlogo from "../../assets/Navlogo.png";
import { Link, NavLink } from "react-router";
import { IoLogoGithub } from "react-icons/io";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">
        <li className="m-2 hover:link">Home</li>
      </NavLink>
      <NavLink
        to="/apps"
        className={({ isActive }) => (isActive ? "text-[#39bcf6] link" : "")}
      >
        <li className="m-2 hover:link">Apps</li>
      </NavLink>
      <NavLink
        to="/installation"
        className={({ isActive }) => (isActive ? "text-[#39bcf6] link" : "")}
      >
        <li className="m-2 hover:link">Installation</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-[#001127] shadow-sm text-white sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn bg-[#001127] border-none shadow-none text-xl flex items-center"
        >
          <img className="w-13 h-13" src={Navlogo} alt="QuantumCode Logo" />
          <span className="text-xl font-bold text-white">
            Quantum<span className="text-[#39bcf6]">Code</span>
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="https://github.com/mahmud014"
          target="_blank"
          rel="noopener noreferrer"
          className="btn shadow-none bg-gradient-to-r from-[#0072ff] to-[#39bcf6] text-white border-none hover:from-[#39bcf6] hover:to-[#0072ff]"
        >
          <IoLogoGithub />
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
