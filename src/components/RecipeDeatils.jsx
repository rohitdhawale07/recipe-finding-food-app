import React, { useEffect, useState } from "react";
import { getRecipe } from "../api/Api";
import { Link, useParams } from "react-router-dom";
import Recipes from "../pages/Recipes";

function RecipeDeatils() {
  const [recipe, setRecipe] = useState({});
  const { recipeID } = useParams();

  useEffect(() => {
    const getData = async () => {
      let result = await getRecipe(recipeID);
      if (result && result.recipe) {
        setRecipe(result.recipe);
      }
    };
    getData();
  }, []);

  return Object.keys(recipe).length > 0 ? (
    <div className="container mx-auto mt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 recipe-details">
        <div>
          <Link
            to="/recipes"
            className="bg-yellow-500 font-semibold hover:bg-yellow-300 hover:text-white text-white py-2 px-4 rounded text-lg"
          >
            Back to recipe list
          </Link>
          <img src={recipe.image_url} alt="recipe" className="mt-4" />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4">{recipe.title}</h2>
          <p className="text-xl font-semibold text-yellow-700">
            Provided by: {recipe.publisher}
          </p>
          <a
            href={recipe.publisher_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-700 hover:text-white rounded text-lg mt-4 inline-block"
          >
            Publisher Webpage
          </a>
          <a
            href={recipe.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-2 px-4  hover:bg-green-700 hover:text-white rounded text-lg mt-4 inline-block ml-4"
          >
            RECIPE URL
          </a>
          <h3 className="text-2xl font-bold mt-6">Ingredients</h3>
          <table className="table-auto mt-4">
            <tbody className="shadow-md">
              {recipe &&
                recipe.ingredients.map((data, index) => (
                  <tr key={index}>
                    <td className="border px-8 py-2 font-bold">{data}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : null;
}

export default RecipeDeatils;
