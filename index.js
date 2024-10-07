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

// Route all news
app.get("/news", (req, res) => {
  res.send(news);
});

// Route: News by id
app.get("/news/:id", (req, res) => {
  id = req.params.id;
  const selectedNews = news.find((n) => (n._id = id));
  res.send(selectedNews);
});

// Route: News by category id
app.get("/category/:id", (req, res) => {
  id = req.params.id;
  console.log(id);
  const selectedNews = news.filter((n) => n.category_id == id);
  res.send(selectedNews);
});

// Create route
app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Server is running... on http://localhost:${port}`);
});
