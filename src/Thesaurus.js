import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Thesaurus() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0].meta);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl2 = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${keyword}?key=42a17a21-a350-4f87-9819-742a0deaf176`;
    axios.get(apiUrl2).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="thesaurus">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <button className="btn btn-warning p-2 m-5">seek!</button>
      </form>

      <Results results={results} />
    </div>
  );
}
