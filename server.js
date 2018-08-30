const express = require("express");

var app = express();

app.get("/", (request, response) => {
  // response.send('<h1>Hello Express!</h1>');
  response.send({
    name: "Evan",
    likes: ["Reading", "Coding", "Gaming"]
  });
});

app.get("/about", (request, response) => {
  response.send("About Page");
});

app.get("/bad", (request, response) => {
  response.send({
    errorMessage: "Error retrieving data!"
  });
});

app.listen(3000);
