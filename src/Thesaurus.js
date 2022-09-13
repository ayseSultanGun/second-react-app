import React, { useState } from "react";

export default function Thesaurus() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for synonyms of ${keyword} `);
  }

  function handleKeywordChange(event) {
    console.log(event.target.value);
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
