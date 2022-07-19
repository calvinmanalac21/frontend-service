import React from "react";
import { Link } from "react-router-dom";
import navigation from "./Utils/NavItems";
const Footer = () => {
  return (
    <footer className="bg-slate-400 w-full flex shadow-md relative max-h-[200px] bottom-0 ">
      <div className="flex-row-reverse max-w-7xl  mx-auto py-12 px-4 sm:px-6 md:flex md:items-center w-full md:flex-row md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item, index) => (
            <Link className=" text-100" key={index} to={item.href}>
              {item.icon}
            </Link>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-teal-900">
            &copy; 2020 Hooli Software, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
