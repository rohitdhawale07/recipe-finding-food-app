import React from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { getRecipes } from "../api/Api";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Recipes() {
  const [searchedQuery, setSearchedQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getSerachedResult();
  }, [searchedQuery]);

  const getSerachedResult = async () => {
    let result = await getRecipes(searchedQuery);
    if (result && result.recipes) {
      setRecipes(result.recipes);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
    >
      <Search setSearchedQuery={setSearchedQuery} />
      <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
    </motion.div>
  );
}

export default Recipes;
