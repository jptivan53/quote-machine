import React from "react";

function Buttons({ getQuote, text, author }) {
  return (
    <div id="buttons">
      <button className="btn" onClick={() => getQuote()} id="new-quote">
        New Quote
      </button>
      <a
        className="btn"
        id="tweet-quote"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/intent/tweet?text="${text}" ${author}`}
      >
        <i class="fab fa-twitter"></i>
      </a>
    </div>
  );
}

export default Buttons;
