const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
const allRoutes = require('./routes/allRoutes')
const addUserRoute = require('./routes/addUser')


// delete
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
// ========================================================



mongoose
  .connect(
    "mongodb+srv://dev-ismail-node:n3nWpX6TJZ3khLeO@cluster0.hqp3leq.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


  app.use(allRoutes)
  app.use("/user/add.html",addUserRoute)