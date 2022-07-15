import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import navigation from "./Utils/NavItems";

const Navbar2 = () => {
  return (
    <div className="relative max-h-[7rem] bg-gray-800 mx-auto md:flex md:items-center md:justify-center space-x-4 overflow-visible w-full">
      {/* @@LOGO */}

      {/* NAVIVAGATION MAPPING */}
      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <nav
            className="relative  max-w-7xl mx-auto mt-4 flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between md:translate-y-4  space-x-11 w-full md:w-auto">
                <Link to="/">
                  <img
                    className="h-[2rem] w-auto sm:h-10"
                    src="https://whitelionarreton.com/wp-content/uploads/2018/12/Logo-white.png"
                    alt=""
                  />
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden translate-y-4 space-x-10 mx-auto md:flex md:ml-10">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="font-medium text-white hover:text-gray-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden ml-9 md:flex md:translate-y-4">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ml-[60px] text-white bg-gray-600 hover:bg-gray-700"
              >
                Log in
              </Link>
            </div>
          </nav>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-12 w-auto"
                      src="https://whitelionarreton.com/wp-content/uploads/2018/12/Logo-white.png"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1 ">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="px-3 py-2 rounded-md text-base justify-center flex  font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/"
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                >
                  Log in
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar2;
