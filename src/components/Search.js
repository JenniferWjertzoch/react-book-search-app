import React from "react";

export default function Search({ inputTextHandler, search }) {
  return (
    <div>
      <section className="searchfield">
        <input
          type="text"
          placeholder="Find your book here"
          className="searchbox"
          onChange={inputTextHandler}
          onKeyPress={search}
        />
      </section>
    </div>
  );
}
