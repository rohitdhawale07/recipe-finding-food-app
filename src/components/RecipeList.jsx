import React from "react";
import RecipeListItem from "./RecipeListItem";

function RecipeList({ recipes, searchedQuery }) {
  return (
    <>
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">
          RECIPE LIST FOR: {searchedQuery}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes &&
            recipes.map((recipe, index) => (
              <div key={index} className="mb-4">
                <RecipeListItem recipe={recipe} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default RecipeList;
