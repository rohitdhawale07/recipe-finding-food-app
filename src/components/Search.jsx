import React, { useEffect, useState } from "react";
import { Grid, Form, Input, Icon } from "semantic-ui-react";

function Search({ setSearchedQuery }) {
  const [value, setValue] = useState("");
  const onFormSubmit = () => {
    if (!value) {
      alert("You haven't entered any receipe yet");
    } else {
      setSearchedQuery(value);
      setValue("");
    }
  };

  useEffect(() => {
    setSearchedQuery("pizza");
  }, []);
  return (
    <>
      <Grid columns={2} textAlign="center" className="search-box">
        <Grid.Column>
          <h2 className="text-3xl mb-15 text-gray-700">
            Search Recipes With{" "}
            <span className="text-red-500 food2fork text-5xl"> Food2Fork</span>{" "}
          </h2>
          <h4 className="text-bold text-gray-700">
            Type Recipes Separated By Comma
          </h4>
          <Form onSubmit={onFormSubmit}>
            <Input
              placeholder="chicken, onion, carrot"
              action={{ icon: "search", color: "blue" }}
              onChange={(e) => setValue(e.target.value)}
              value={value}
              size="big"
            />
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default Search;
