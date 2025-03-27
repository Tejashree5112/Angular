const express = require("express");
const {
  getNewProducts,
  getFeaturedProducts,
  getProductForListing,
} = require("../handlers/producthandler");
const { getCategory } = require("../handlers/categoryhandler");
const { getBrands } = require("../handlers/brandhandler");
const router = express.Router();

router.get("/new-products", async (req, res) => {
  const products = await getNewProducts();
  res.send(products);
});

router.get("/featured-products", async (req, res) => {
  const products = await getFeaturedProducts();
  res.send(products);
});

router.get("/categories", async (req, res) => {
  const categories = await getCategory();
  res.send(categories);
});

router.get("/brands", async (req, res) => {
    const brands = await getBrands();
    res.send(brands);
  });

router.get("/products", async (req, res) => {
  const { searchTerm, categoryId, sortBy, sortOrder, brandId, pageSize, page } = req.query;
  const products = await getProductForListing(
    searchTerm,
    categoryId,
    page,
    pageSize,
    sortBy,
    sortOrder,
    brandId,
  );
  res.send(products);
});

module.exports = router;
