const routes = require("express").Router();

const Post = require("./models/Post");

routes.get("/posts", async (req, res) => {
  const posts = await Post.find();

  return res.json(posts);
});

routes.get("/", async (req, res) => {
  res.send('Hello World!')
});

routes.get("/hey", async (req, res) => {
  res.send('HEEEY')
});

module.exports = routes;
