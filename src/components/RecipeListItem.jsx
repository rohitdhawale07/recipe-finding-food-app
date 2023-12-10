import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "semantic-ui-react";

function RecipeListItem({ recipe }) {
  return (
    <>
      <Card className="w-60 h-96 bg-gray-200 p-4 m-4 rounded-lg shadow-md">
        <img src={recipe.image_url} alt="img" style={{ height: 180 }} />
        <CardContent>
          <CardHeader content={(recipe.title).slice(0,50)} />
          <CardDescription>
            <h4 className="text-gray-600">{recipe.publisher}</h4>
          </CardDescription>
        </CardContent>
        <CardContent className="flex justify-between items-center">
          <Button
            as={Link}
            to={`/recipes/${recipe.recipe_id}`}
            content="Details"
            color="blue"
            size="tiny"
          />
          <Button
            href={recipe.source_url}
            target="_blank"
            // to={}
            content="RECIPE URL"
            color="green"
            size="tiny"
          />
        </CardContent>
      </Card>
    </>
  );
}

export default RecipeListItem;
