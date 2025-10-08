import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#001127] text-white p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link-hover">About us</Link>
        <Link className="link-hover">Contact</Link>
        <Link className="link-hover">Jobs</Link>
        <Link className="link-hover">Press kit</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-3xl text-[#39bcf6]">
          <Link
            to="https://github.com/mahmud014"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub />
          </Link>
          <Link
            to="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoYoutube />
          </Link>
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoFacebook />
          </Link>
          <Link to="https://x.com" target="_blank" rel="noopener noreferrer">
            <IoLogoTwitter />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          OuantumCode
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
