const express = require("express");
const jsdom = require("jsdom");

const { JSDOM } = jsdom;

const app = express();

// const dom = new JSDOM(`<!DOCTYPE html> <p> This is the first time I use Jsdom... </p> `);
// console.log(dom.window.document.querySelector('p').innerHTML);

const dom = new JSDOM(`<!DOCTYPE html>Hello`);
dom.serialize() === "<!DOCTYPE html> <head></head><body>Hello</body></html>";

console.log(dom.serialize());
let recall = new Date().getDate();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

const found = document.getElementsByClassName("start").innerHTML;
console.log(found);

app.get("/change", function (req, res) {
  // const dom = new JSDOM(`<!DOCTYPE html> <p> This is the first time I use Jsdom... </p> `);
  // dom.window.document.getElementsByClassName("start").innerHTML=`<p> This is the first time I use Jsdom... </p>`;

  // const dom = new JSDOM(`index.html`);
  // dom.window.document.getElementsByClassName("start").innerHTML=`<p> This is the first time I use Jsdom... </p>`;

  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("Server has started on port 3000");
});
