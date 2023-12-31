import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import { Book } from "./Book";

function BookList() {
  return (
    <>
      <h1 className="title">Best Sellers in Books</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book book={book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
