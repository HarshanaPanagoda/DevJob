import React from "react";
import logo from "../assets/LOGO.png";

const Footer = () => {
  return (
    <footer className="bg-blue-600 py-6 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-white text-3xl font-bold">DevJobs</h2>
          <p className="text-white mt-2">
            Your gateway to a brighter future. Join us and find your dream job
            today.
          </p>
        </div>
        <div className="flex justify-center md:justify-end items-center">
          <img src={logo} alt="Logo" className="w-24 h-auto rounded-lg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
