import React from "react";
import Buttons from "./Buttons";

function QuoteBox({ text, author, getQuote }) {
  return (
    <div id="quote-box">
      <div className="quote">
        <div id="text" className="courgette">
          <q>{text}</q>
        </div>
        <div id="author" className="open-sans">
          - {author}
        </div>
      </div>
      <Buttons text={text} author={author} getQuote={getQuote} />
    </div>
  );
}

export default QuoteBox;
