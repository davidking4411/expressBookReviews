const express = require("express");
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  //Write your code here
  return res.status(300).json({ message: "new user registered" });
});

// Get the book list available in the shop
public_users.get("/", async function (req, res) {
  return res.status(300).json(books);
});

// Get book details based on ISBN
public_users.get("/isbn/:isbn", async function (req, res) {
  let output = [];
  console.log(books);
  for (const this_book in books) {
    console.log(req.params.isbn);
    console.log("this_book.isbn " + books[this_book].isbn);
    if (books[this_book].isbn == req.params.isbn) output.push(books[this_book]);
  }
  return res.status(300).json(output);
});

// Get book details based on author
public_users.get("/author/:author", async function (req, res) {
  let output = [];
  console.log(books);
  for (const this_book in books) {
    console.log(req.params.author);
    console.log("this_book.author " + books[this_book].author);
    if (books[this_book].author.localeCompare(req.params.author) == 0)
      output.push(books[this_book]);
  }
  return res.status(300).json(output);
});

// Get all books based on title
public_users.get("/title/:title", async function (req, res) {
  //Write your code here
  let output = [];
  console.log(books);
  for (const this_book in books) {
    console.log(req.params.title);
    console.log("this_book.title " + books[this_book].title);
    if (books[this_book].title.localeCompare(req.params.title) == 0)
      output.push(books[this_book]);
  }
  return res.status(300).json(output);
});

//  Get book review
public_users.get("/review/:isbn", function (req, res) {
  //Write your code here
  let output = [];
  console.log(books);
  for (const this_book in books) {
    console.log(req.params.isbn);
    console.log("this_book.isbn " + books[this_book].isbn);
    if (books[this_book].isbn == req.params.isbn)
      output.push(books[this_book].reviews);
  }
  return res.status(300).json(output);
});

module.exports.general = public_users;
