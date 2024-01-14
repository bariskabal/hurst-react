import React from "react";
import Banner from "../components/Banner/Banner";
import Blogs from "../components/Blog/Blogs";
import Footer from "../components/Layout/Footer/Footer";
import Header from '../components/Layout/Header/Header'
import SearchModal from "../components/Modal/Search/SearchModal";
import DiscountSlider from "../components/Product/DiscountSlider/DiscountSlider";
import ProductsTab from "../components/Product/Products/ProductsTab";
import ProductSlider from "../components/Product/Slider/ProductSlider";
import Subscribe from "../components/Subscribe/Subscribe";
import { useState, useEffect } from "react";
import ScrollUp from "../components/ScrollUp/ScrollUp";
import ProductDetailModal from "../components/Modal/Product/ProductDetailModal";

export default function HomePage() {

  const [searchModal, setSearchModal] = useState(false)
  const [productDetailModals, setProductDetailModals] = useState(false);
  const [loginModal, setLoginModal] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const [modalProduct, setModalProduct] = useState({});

  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const token = "ananyanimda";
  localStorage.setItem('token',token)

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    if (productDetailModals) {
      // Modal açıldığında body'nin kaydırmasını engelle
      document.body.style.overflow = 'hidden';
    } else {
      // Modal kapandığında kaydırmayı geri getir
      document.body.style.overflow = 'unset';
    }
  }, [productDetailModals]);

    return (
        <React.Fragment>
            <Header setSearchModal={setSearchModal} searchModal={searchModal}/>
            <Banner loginModal={loginModal} setLoginModal={setLoginModal} setSearchModal={setSearchModal} searchModal={searchModal} />
            <ProductSlider setModalProduct={setModalProduct} setProductDetailModals={setProductDetailModals}/>
            <DiscountSlider />
            <ProductsTab setModalProduct={setModalProduct} setProductDetailModals={setProductDetailModals}/>
            <Blogs />
            <Subscribe />
            <Footer />
            <SearchModal searchModal={searchModal} setSearchModal={setSearchModal}/>
            {isVisible && (<ScrollUp />)}
            <ProductDetailModal productDetailModals={productDetailModals} modalProduct={modalProduct} setProductDetailModals={setProductDetailModals}/>
        </React.Fragment>
    )
}