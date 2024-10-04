const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000; // env te port na thakle 5000 default

const news = require("./data/news.json");
const categories = require("./data/categories.json");

app.use(cors());

// Create route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Create route
app.get("/about", (req, res) => {
  res.send("About Us Page");
});

// Create route
app.get("/news", (req, res) => {
  res.send(news);
});

// Create route
app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Server is running... on http://localhost:${port}`);
});
