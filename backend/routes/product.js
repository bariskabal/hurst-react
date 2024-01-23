const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const Product = require("../models/Product.js");
const StockStatus = require("../models/StockStatus.js"); // StockStatus modelinizi dahil edin
const validateToken = require("../middleware/validateTokenHandler");
const { isAdmin, isUser } = require("../middleware/checkUserRole");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, `product_${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// New Product
router.post("/", validateToken, isAdmin, upload.any(), async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  console.log("req.body:", req.body);
  console.log("req.files:", req.files);
  try {
    // Ürün oluşturma
    const product = await Product.create(
      [
        {
          name: req.body.name,
          price: req.body.price,
          discount: req.body.discount,
          description: req.body.description,
          category: req.body.category,
        },
      ],
      { session }
    );

    // Stok ve resim işlemleri
    const stocks = req.body.stocks; // Eğer JSON string olarak geliyorsa parse edilir
    for (const [index, stock] of stocks.entries()) {
      const imagesFieldName = `stocks[${index}][images]`;
      const images = req.files.filter((file) =>
        file.fieldname.startsWith(imagesFieldName)
      );
      const imagePaths = images.map((file) => file.path);
      // Stok oluşturma ve 'product' alanını belirtme
      await StockStatus.create(
        [{ ...stock, images: imagePaths, product: product[0]._id }],
        { session }
      );
    }

    // Transaction onaylama
    await session.commitTransaction();
    res.status(200).send("Ürün ve stoklar başarıyla oluşturuldu");
  } catch (error) {
    // Hata durumunda transaction geri alma
    console.error("Hata oluştu:", error);
    await session.abortTransaction();
    res.status(500).send("Server Error");
  } finally {
    // Session kapatma
    session.endSession();
  }
});

// getAll
router.get("/", async (req, res) => {
  try {
    let products = await Product.find({});
    return res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// getAll
router.get("/getActiveProducts", async (req, res) => {
  try {
    let products = await Product.find({ isActive: true }).populate(
      "category",
      "name"
    );
    const productsWithStocks = await Promise.all(
      products.map(async (product) => {
        const stockStatuses = await StockStatus.find({
          product: product._id,
        }).populate("color");
        if (stockStatuses.length > 0) {
          return {
            ...product.toObject(),
            stockStatuses,
          };
        }
        return null; // Stoku olmayan ürünleri atla
      })
    );

    // Stoku olmayan ürünleri filtrele
    const filteredProducts = productsWithStocks.filter(
      (product) => product !== null
    );
    return res.status(200).json(filteredProducts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// getFeaturedProducts
router.get("/getFeaturedProducts", async (req, res) => {
  try {
    let products = await Product.find({ isActive: true })
      .sort("-createdAt")
      .limit(6)
      .populate("category", "name");
      const productsWithStocks = await Promise.all(
        products.map(async (product) => {
          const stockStatuses = await StockStatus.find({
            product: product._id,
          }).populate("color");
          if (stockStatuses.length > 0) {
            return {
              ...product.toObject(),
              stockStatuses,
            };
          }
          return null; // Stoku olmayan ürünleri atla
        })
      );
  
      // Stoku olmayan ürünleri filtrele
      const filteredProducts = productsWithStocks.filter(
        (product) => product !== null
      );
      return res.status(200).json(filteredProducts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// getNewArrivals
router.get("/getNewArrivals", async (req, res) => {
  try {
    let products = await Product.find({ isActive: true })
      .sort("-createdAt")
      .limit(10)
      .populate("category", "name");
      const productsWithStocks = await Promise.all(
        products.map(async (product) => {
          const stockStatuses = await StockStatus.find({
            product: product._id,
          }).populate("color");
          if (stockStatuses.length > 0) {
            return {
              ...product.toObject(),
              stockStatuses,
            };
          }
          return null; // Stoku olmayan ürünleri atla
        })
      );
  
      // Stoku olmayan ürünleri filtrele
      const filteredProducts = productsWithStocks.filter(
        (product) => product !== null
      );
      return res.status(200).json(filteredProducts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// getBestSellerProducts
router.get("/getBestSellerProducts", async (req, res) => {
  try {
    let products = await Product.find({ isActive: true })
      .limit(10)
      .populate("category", "name");
      const productsWithStocks = await Promise.all(
        products.map(async (product) => {
          const stockStatuses = await StockStatus.find({
            product: product._id,
          }).populate("color");
          if (stockStatuses.length > 0) {
            return {
              ...product.toObject(),
              stockStatuses,
            };
          }
          return null; // Stoku olmayan ürünleri atla
        })
      );
  
      // Stoku olmayan ürünleri filtrele
      const filteredProducts = productsWithStocks.filter(
        (product) => product !== null
      );
      return res.status(200).json(filteredProducts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// getMostLikedProducts
router.get("/getMostLikedProducts", async (req, res) => {
  try {
    let products = await Product.find({ isActive: true })
      .limit(10)
      .populate("category", "name");
      const productsWithStocks = await Promise.all(
        products.map(async (product) => {
          const stockStatuses = await StockStatus.find({
            product: product._id,
          }).populate("color");
          if (stockStatuses.length > 0) {
            return {
              ...product.toObject(),
              stockStatuses,
            };
          }
          return null; // Stoku olmayan ürünleri atla
        })
      );
  
      // Stoku olmayan ürünleri filtrele
      const filteredProducts = productsWithStocks.filter(
        (product) => product !== null
      );
      return res.status(200).json(filteredProducts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// getDiscountsProducts
router.get("/getDiscountsProducts", async (req, res) => {
  try {
    let products = await Product.find({ isActive: true, discount: { $gt: 0 } })
      .limit(10)
      .populate("category", "name");
      const productsWithStocks = await Promise.all(
        products.map(async (product) => {
          const stockStatuses = await StockStatus.find({
            product: product._id,
          }).populate("color");
          if (stockStatuses.length > 0) {
            return {
              ...product.toObject(),
              stockStatuses,
            };
          }
          return null; // Stoku olmayan ürünleri atla
        })
      );
  
      // Stoku olmayan ürünleri filtrele
      const filteredProducts = productsWithStocks.filter(
        (product) => product !== null
      );
      return res.status(200).json(filteredProducts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
