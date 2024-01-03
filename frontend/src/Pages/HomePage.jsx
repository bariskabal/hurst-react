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
import { useState } from "react";

export default function HomePage() {

  const [searchModal, setSearchModal] = useState(false)
  const [loginModal, setLoginModal] = useState(false)

    return (
        <React.Fragment>
            <Header setSearchModal={setSearchModal} searchModal={searchModal}/>
            <Banner loginModal={loginModal} setLoginModal={setLoginModal} setSearchModal={setSearchModal} searchModal={searchModal} />
            <ProductSlider />
            <DiscountSlider />
            <ProductsTab />
            <Blogs />
            <Subscribe />
            <Footer />
            <SearchModal searchModal={searchModal} setSearchModal={setSearchModal}/>
        </React.Fragment>
    )
}