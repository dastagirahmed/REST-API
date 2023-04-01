require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Product_Routes = require("./routes/products");
const connectDB = require("./DB/connect");
app.use("/", Product_Routes);

const start = async () => {
  try {
    await connectDB(process.env.URL);
    app.listen(PORT, () => {
      console.log("Listening to ", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
