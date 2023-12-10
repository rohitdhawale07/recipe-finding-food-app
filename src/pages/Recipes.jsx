import React from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { getRecipes } from "../api/Api";
import { useState,useEffect } from "react";

function Recipes() {

  const [searchedQuery, setSearchedQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

useEffect(()=>{
  getSerachedResult();
},[searchedQuery])

  const getSerachedResult =async()=>{
    let result = await getRecipes(searchedQuery);
    if(result && result.recipes){
      setRecipes(result.recipes);
    }
  }
  return (
    <>
      <Search setSearchedQuery={setSearchedQuery} />
      <RecipeList recipes = {recipes} searchedQuery={searchedQuery} />
    </>
  );
}

export default Recipes;
