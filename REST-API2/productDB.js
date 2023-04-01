require("dotenv").config();
const connectDB = require("./DB/connect");
const Product = require("./model/product");
const ProductJson = require("./products.json");
const start = async () => {
  try {
    await connectDB(process.env.URL);
    await Product.create(ProductJson);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};
start();
