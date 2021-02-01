import React from "react";

export default function Result({ result }) {
  return (
    <div className="result">
      <img
        src={
          result.volumeInfo.imageLinks === undefined
            ? "https://via.placeholder.com/150x200"
            : `${result.volumeInfo.imageLinks.thumbnail}`
        }
        alt=""
      />
      <h3>{result.volumeInfo.title}</h3>
    </div>
  );
}
