import React from "react";
import Header from "../components/common/Header";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

function Home() {
  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.4 }} >
      <Header
        className="name"
        data-text="Our Recipes"
        title="Our Recipes"
        bgClass="bg-image"
      >
        <button className="bg-blue-700 text-white hover:bg-blue-800 py-2 px-6 rounded-md  duration-200 ease-in-out">
          <Link
            to="/recipes"
            className="text-white text-3xl hover:text-white font-semibold"
          >
            Search Recipes
          </Link>
        </button>
      </Header>
    </motion.div>
  );
}

export default Home;
