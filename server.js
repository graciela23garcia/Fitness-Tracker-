const express = require("express");

const PORT = process.env.PORT || 8080;

const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const MONGODB_URI = "mongodb+srv://gracielagarcia:elemelon23@fitnessdb.xpbgz.mongodb.net/<dbname>?retryWrites=true&w=majoritymongodb://localhost:27017/fitnessTracker";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

//routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});