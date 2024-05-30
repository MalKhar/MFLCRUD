//imports
const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/post.model.js");
const postRoute = require("./routes/post.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/posts/", postRoute);

//main
app.get("/", (req, res) => {
  res.send("Hello from node API Server");
});

//db connection
mongoose
  .connect(
    "mongodb+srv://admin:tffagq5t@backenddb.tweigqv.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Couldn't connect");
  });
