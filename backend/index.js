/* eslint-disable no-undef */
require("dotenv").config();

const app = require("./src/app");

const PORT = process.env.PORT || 3000;

if (typeof PhusionPassenger !== "undefined") {
  PhusionPassenger.configure({ autoInstall: false });
}
if (typeof PhusionPassenger !== "undefined") {
  app.listen("passenger");
} else {
  app.listen(PORT);
  console.warn(`server listen on port: ${PORT}`);
}
