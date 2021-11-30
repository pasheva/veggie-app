// simple node web server that displays hello world
// optimized for Docker image

const express = require("express");
// this example uses express web framework so we know what longer build times
// do and how Dockerfile layer ordering matters. If you mess up Dockerfile ordering
// you'll see long build times on every code change + build. If done correctly,
// code changes should be only a few seconds to build locally due to build cache.

const morgan = require("morgan");
// morgan provides easy logging for express, and by default it logs to stdout
// which is a best practice in Docker. Friends don't let friends code their apps to
// do app logging to files in containers.

const {query,dropall} = require("./database.js");

// Appi
const app = express();

app.use(morgan("common"));

app.get("/", async function(req, res, next) {
  // query('show databases');
  const query_res = await query('show databases;');
  res.send(`${query_res[4].Database}`);
});

app.get("/dropall", async function(req, res, next) {
  // query('show databases');
  await query('DROP TABLE plant;');
  await query('DROP TABLE edible;');
  await query('DROP TABLE discoverer;');
  await query('DROP TABLE photo;');
  await query('DROP TABLE predator;');
  await query('DROP TABLE season;');
  await query('DROP TABLE user;');
  await query('DROP TABLE entity1;');
  await query('DROP TABLE visitor_location;');
  await query('DROP TABLE terrain;');
  await query('DROP TABLE climate;');

  res.send(`dropped`);
});

app.get("/healthz", function(req, res) {
  // do app logic here to determine if app is truly healthy
  // you should return 200 if healthy, and anything else will fail
  // if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
  res.send("I am happy and healthy. YAYYY!");
});


module.exports = app;
