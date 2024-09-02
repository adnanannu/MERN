const productModel = require("../../models/productModel");

const getCategoryProduct = async (req, res) => {
  try {
    // Get distinct categories
    const productCategories = await productModel.distinct("category");

    console.log("Categories:", productCategories);

    // Array to store one product from each category
    const productByCategoryPromises = productCategories.map(category => 
      productModel.findOne({ category }).exec()
    );

    // Resolve all promises
    const productByCategory = await Promise.all(productByCategoryPromises);

    // Filter out null values in case any category didn't have a product
    const filteredProducts = productByCategory.filter(product => product !== null);

    res.json({
      message: "Category product",
      data: filteredProducts,
      success: true,
      error: false
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false
    });
  }
};

module.exports = getCategoryProduct;