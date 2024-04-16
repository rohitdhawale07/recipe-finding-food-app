import React from "react";
import RecipeListItem from "./RecipeListItem";

function RecipeList({ recipes, searchedQuery }) {
  return (
    <>
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">
          RECIPE LIST FOR:{" "}
          <span className="text-[#F15025]">{searchedQuery.toUpperCase()}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {recipes &&
            recipes.map((recipe, index) => (
              <div key={index} className="mb-4 sm:mx-auto md:mx-3 ">
                <RecipeListItem recipe={recipe} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default RecipeList;
