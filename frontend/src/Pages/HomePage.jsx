import Banner from "../components/Banner/Banner";
import Blogs from "../components/Blog/Blogs";
import DiscountSlider from "../components/Product/DiscountSlider/DiscountSlider";
import ProductsTab from "../components/Product/Products/ProductsTab";
import ProductSlider from "../components/Product/Slider/ProductSlider";
import Subscribe from "../components/Subscribe/Subscribe";
import { useState, useEffect } from "react";
import ScrollUp from "../components/ScrollUp/ScrollUp";
import ProductDetailModal from "../components/Modal/Product/ProductDetailModal";
import { useSelector } from "react-redux";
import MainLayout from "../layouts/MainLayout";

export default function HomePage() {

  const [isVisible, setIsVisible] = useState(false);
  const isModalOpen = useSelector(state => state.modal.productModal);
 
  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    if(document.body.classList.contains("bg-dark-white")) {
      document.body.classList.remove('bg-dark-white');
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      // Modal açıldığında body'nin kaydırmasını engelle
      document.body.style.overflow = 'hidden';
    } else {
      // Modal kapandığında kaydırmayı geri getir
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

    return (
        <MainLayout>
            <Banner />
            <ProductSlider />
            <DiscountSlider />
            <ProductsTab/>
            <Blogs />
            <Subscribe />
            {isVisible && (<ScrollUp />)}
            <ProductDetailModal/>
        </MainLayout>
    )
}