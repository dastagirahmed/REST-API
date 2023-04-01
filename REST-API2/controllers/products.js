const Product = require("../model/product");
const getAllProducts = async (req, res) => {
  const data = await Product.find({});
  res.status(200).json({ data });
};
const getAllProductsTesting = async (req, res) => {
  const data = await Product.find(req.query);
  res.status(200).json({ data });
  console.log(data);
};

module.exports = { getAllProducts, getAllProductsTesting };
