import React, { useState, useEffect } from "react";
import QuoteBox from "./components/QuoteBox";

function App() {
  const [quote, setQuote] = useState({
    text: "",
    author: ""
  });

  const getQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote({
      text: data.content,
      author: data.author
    });
  };

  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div className="App">
      <h1 className="title">Random Quote</h1>
      <div className="container">
        <QuoteBox text={quote.text} author={quote.author} getQuote={getQuote} />
      </div>
      <div className="by">
        Made with{" "}
        <span role="img" aria-label="love">
          💚
        </span>{" "}
        by{" "}
        <a
          href="https://github.com/jeantivan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jean Tivan
        </a>
      </div>
    </div>
  );
}

export default App;
