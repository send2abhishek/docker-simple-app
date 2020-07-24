const express = require("express");
const app = express();

const redis = require("redis");
const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});
client.set("visits", 0);

app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    res.status(200).json({
      msg: "Welcome to page, number of visit is",
      count: visits,
    });
    client.set("visits", parseInt(visits) + 1);
  });
});

module.exports = app;
