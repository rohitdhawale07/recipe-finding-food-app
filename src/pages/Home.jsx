import React from "react";
import Header from "../components/common/Header";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header title="Our Recipes" bgClass="bg-image">
        <button className="bg-blue-700 text-white hover:bg-blue-800 py-2 px-6 rounded-md">
          <Link to="/recipes" className="text-white text-3xl hover:text-white font-semibold">
            Search Recipes
          </Link>
        </button>
      </Header>
    </>
  );
}

export default Home;
