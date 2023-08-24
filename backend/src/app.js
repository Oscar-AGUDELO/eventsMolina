const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const router = require("./router");

const app = express();

// use some application-level middlewares
app.use(
  cors({
    origin: [
      "http://pentecostes.oscardev.fr",
      "http://www.pentecostes.oscardev.fr",
      "https://pentecostes.oscardev.fr",
      "https://www.pentecostes.oscardev.fr",
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "../public")));

// API routes
app.use("/api", router);

// Redirect all requests to the REACT app
const reactIndexFile = path.join(__dirname, "../public", "index.html");

if (fs.existsSync(reactIndexFile)) {
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export
module.exports = app;
