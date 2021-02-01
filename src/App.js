import React, { useState } from "react";
import { render } from "react-dom";
//Importing components
import Search from "./components/Search";
import Results from "./components/Results";
//Axios
import axios from "axios";

//Create App component
const App = () => {
  //Create a state
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  //API
  const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=";

  //Create search
  const search = (e) => {
    if (e.key === "Enter") {
      axios(
        apiUrl + state.s + "&key=" + `${process.env.REACT_APP_GOOGLE_API_KEY}`
      ).then(({ data }) => {
        let results = data.items;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  //Handle input
  const inputTextHandler = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Book Shelf</h1>
      </header>
      <main>
        <Search inputTextHandler={inputTextHandler} search={search} />
        <Results results={state.results} />
      </main>
    </div>
  );
};

render(<App />, document.getElementById("root"));
