import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");

  const handleNavItem = (item) => {
    setActiveItem(item);
  };
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="p-4 shadow-md bg-slate-50  fixed w-full top-0 z-10"
      >
        <div className="container mx-auto flex items-center justify-start gap-20 ">
          <div className="flex items-center">
            <img
              src="https://food2forks.netlify.app/static/media/logo.cc3fff7e.svg"
              alt="logo"
              className="w-60"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Link
              onClick={() => handleNavItem("Home")}
              to="/"
              className={`text-xl ${
                activeItem === "Home" ? "text-blue-500" : "text-black"
              } hover:text-gray-500`}
            >
              Home
            </Link>
            <Link
              onClick={() => handleNavItem("Recipes")}
              to="/recipes"
              className={`text-xl ${
                activeItem === "Recipes" ? "text-blue-500" : "text-black"
              } px-7 hover:text-gray-500`}
            >
              Recipes
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;
