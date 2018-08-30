const express = require("express");
const hbs = require("hbs");

var app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  // response.send('<h1>Hello Express!</h1>');
  response.render("home.hbs", {
    pageTitle: "Home Page",
    message: "Welcome Home!",
    currentYear: new Date().getFullYear()
  });
});

app.get("/about", (request, response) => {
  response.render("about.hbs", {
    pageTitle: "About Page",
    currentYear: new Date().getFullYear()
  });
});

app.get("/bad", (request, response) => {
  response.send({
    errorMessage: "Error retrieving data!"
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
