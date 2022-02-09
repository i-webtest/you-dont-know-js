"use strict";

const books = document.querySelectorAll(".books");
const book = document.querySelectorAll(".book");

const title = document.querySelectorAll(".book > h2 > a");
title[4].textContent = "Книга 3. this и Прототипы Объектов";

books[0].prepend(book[1], book[0], book[4], book[3], book[5]);

document.querySelector("body").style.backgroundImage =
  "url(image/you-dont-know-js.jpg)";

document.querySelector(".adv").remove();

const list = document.querySelectorAll(".book > ul");
const chapter = document.querySelectorAll(".book > ul > li");
list[1].prepend(
  chapter[6],
  chapter[7],
  chapter[9],
  chapter[12],
  chapter[14],
  chapter[10],
  chapter[11],
  chapter[13],
  chapter[15]
);
list[4].prepend(
  chapter[36],
  chapter[37],
  chapter[45],
  chapter[39],
  chapter[40],
  chapter[38],
  chapter[42],
  chapter[43]
);

const newElem = document.createElement("li");
newElem.textContent = "Глава 8: За пределами ES6";
list[5].append(newElem);
list[5].append(chapter[56]);

console.log(books);
console.log(book);
console.log(book[0]);
console.log(title);
console.log(list);
console.log(chapter);
console.log(book[2]);

console.log(newElem);
