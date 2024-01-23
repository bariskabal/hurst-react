import React from "react";
import HeadingBanner from "../../HeadingBanner/HeadingBanner";
import Footer from "../../Layout/Footer/Footer";
import { useState } from "react";
import "./ProductShop.css";
import ProductsGrid from "./Grid/ProductsGrid";
import ProductsList from "./List/ProductsList";
import ProductFilter from "../Filter/ProductFilter";
import Header from "../../Layout/Header/Header";

export default function ProductShop() {
//   const [rangeValues, setRangeValues] = useState([20, 80]);
     const [productsTab, setProductsTab] = useState("grid");

//   const handleRangeChange = (newValue) => {
//     setRangeValues(newValue);
//   };

  document.body.classList.add('bg-dark-white');

  return (
    <React.Fragment>
        <Header />
      <HeadingBanner pageName={"Products Shop"} />
      <div className="product-area pt-80 pb-80 product-style-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <ProductFilter />
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <div className="shop-content mt-tab-30 mb-30 mb-lg-0">
                <div className="product-option mb-30 clearfix">
                  <ul className="nav d-block shop-tab">
                    <li>
                      <a
                        onClick={() => setProductsTab("grid")}
                        className={`${productsTab == "grid" && "active"}`}
                        data-bs-toggle="tab"
                        style={{ cursor: "pointer" }}
                      >
                        <i className="zmdi zmdi-view-module"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={() => setProductsTab("list")}
                        className={`${productsTab == "list" && "active"}`}
                        data-bs-toggle="tab"
                      >
                        <i className="zmdi zmdi-view-list"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="showing text-end d-none d-md-block">
                    <p className="mb-0">Showing 01-09 of 17 Results</p>
                  </div>
                </div>
                <div className="tab-content">
                    {productsTab == 'grid' && <ProductsGrid />}
                    {productsTab == 'list' && <ProductsList />}
                </div>
                <div className="shop-pagination text-center">
                  <div className="pagination align-items-center justify-content-center">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-long-arrow-left"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">01</a>
                      </li>
                      <li>
                        <a className="active" href="#">
                          02
                        </a>
                      </li>
                      <li>
                        <a href="#">03</a>
                      </li>
                      <li>
                        <a href="#">04</a>
                      </li>
                      <li>
                        <a href="#">05</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-long-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
