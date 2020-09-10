const routes = require("express").Router();


routes.get("/", async (req, res) => {
  res.send('Hello World!')
});

routes.get("/heey", async (req, res) => {
  res.send('HEEEY')
});

module.exports = routes;
