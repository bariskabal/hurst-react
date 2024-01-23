const express = require("express");
const router = express.Router();

// Diğer route dosyalarını import ediyoruz
const authRoute = require("./auth.js");
const productRoute = require("./product");
const colorRoute = require("./color");
const categoryRoute = require("./category");
const imageRoute = require("./image.js");

// Her route'ı ilgili yol ile kullanıyoruz
router.use("/auth", authRoute);
router.use("/products", productRoute);
router.use("/colors", colorRoute);
router.use("/categories", categoryRoute);
router.use("/images", imageRoute);

module.exports = router;
