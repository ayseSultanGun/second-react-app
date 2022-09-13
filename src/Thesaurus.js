import React, { useState } from "react";
import axios from "axios";

export default function Thesaurus() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="thesaurus">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <button className="btn btn-warning p-2 m-5">more like this!</button>
      </form>
    </div>
  );
}
