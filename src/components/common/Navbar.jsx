import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="p-4 shadow-md bg-slate-50  fixed w-full top-0 z-10">
        <div className="container mx-auto flex items-center justify-start gap-20 ">
          <div className="flex items-center">
            <img
              src="https://food2forks.netlify.app/static/media/logo.cc3fff7e.svg"
              alt="logo"
              className="w-60"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-back text-xl hover:text-gray-500">
              Home
            </Link>
            <Link
              to="/recipes"
              className="text-black text-xl px-7 hover:text-gray-500"
            >
              Recipes
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
