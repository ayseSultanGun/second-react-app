import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.id}</h2>
        {props.results.syns[0].map(function (synonym, index) {
          return <div key={index}>{synonym}</div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
