const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

const Post = require("./models/Post");

routes.get("/posts", async (req, res) => {
  const posts = await Post.find();

  return res.json(posts);
});

routes.get("/hey", async (req, res) => {
  res.send('Hello World!')
});

routes.get("/", async (req, res) => {
  res.send('running')
});


module.exports = routes;
