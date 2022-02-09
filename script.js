"use strict";
const books = document.querySelectorAll(".books");
const book = document.querySelectorAll(".book");

console.log(books);
console.log(book);

books[0].prepend(book[1], book[0], book[4], book[3], book[5]);

document.querySelector("body").style.backgroundImage =
  "url(image/you-dont-know-js.jpg)";
