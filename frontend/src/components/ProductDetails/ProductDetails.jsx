import React from "react";
import HeadingBanner from "../HeadingBanner/HeadingBanner";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import ProductGallery from "./Gallery/ProductGallery";
import ProductInfo from "./Info/ProductInfo";
import "./ProductDetails.css";
import ProductTabs from "./Tabs/ProductTabs";
import images from "../../images.json";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

if (typeof global === "undefined" && typeof window !== "undefined") {
  window.global = window;
}

export default function ProductDetails() {
  const productImages = images;
  const [isOpen, setIsOpen] = useState(false);
  const [activeImg, setActiveImg] = useState({
    img: productImages[0].img.singleImage,
    imgIndex: 0,
  });

  document.body.classList.add('bg-dark-white');
  return (
    <React.Fragment>
      <Header />
      <HeadingBanner pageName="Single Product" />
      <div className="product-area single-pro-area pt-80 pb-80 product-style-2">
        <div className="container">
          <div className="row shop-list single-pro-info no-sidebar">
            <div className="col-lg-12">
              <div className="single-product clearfix site-main">
                <ProductGallery setIsOpen={setIsOpen} activeImg={activeImg} />
                <ProductInfo
                  setActiveImg={setActiveImg}
                  productImages={productImages}
                />
              </div>
            </div>
          </div>
          <ProductTabs />
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={activeImg.img}
          nextSrc={
            productImages[(activeImg.imgIndex + 1) % productImages.length].img
              .singleImage
          }
          prevSrc={
            productImages[
              (activeImg.imgIndex + productImages.length - 1) %
                productImages.length
            ].img.singleImage
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setActiveImg({
              img: productImages[
                (activeImg.imgIndex + productImages.length - 1) %
                  productImages.length
              ].img.singleImage,
              imgIndex:
                (activeImg.imgIndex + productImages.length - 1) %
                productImages.length,
            })
          }
          onMoveNextRequest={() =>
            setActiveImg({
              img: productImages[
                (activeImg.imgIndex + 1) % productImages.length
              ].img.singleImage,
              imgIndex: (activeImg.imgIndex + 1) % productImages.length,
            })
          }
        />
      )}
      <Footer />
    </React.Fragment>
  );
}
