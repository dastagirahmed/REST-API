const express = require("express");
const MensRanking = require("../src/models/mens");
const app = express();
const MenRanking = require("../src/models/mens");
const port = process.env.PORT || 3000;
require("../src/db/conn");
app.use(express.json());
const router = require("../src/routers/routes");
app.use(router);
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
