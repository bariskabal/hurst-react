import { useState, useEffect } from "react";
import "./ProductsTab.css";
import products from "../../../data.json";
import ProductsTabItem from "./ProductsTabItem";

export default function Products() {
  const [activeTab, setActiveTab] = useState("new-arrivals");

  const handleTabClick = (e, tab) => {
    setActiveTab(tab);
    e.preventDefault();
  };

  useEffect(() => {
    //tab değiştikçe ürünleri çek
  }, [activeTab]);

  return (
    <div className="purchase-online-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2 className="title-border">Purchase Online on Hurst</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <ul className="tab-menu clearfix mb-3">
              <li>
                <a
                  onClick={(e) => handleTabClick(e, "new-arrivals")}
                  href="#"
                  className={`tab-button ${
                    activeTab === "new-arrivals" ? "active" : ""
                  }`}
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => handleTabClick(e, "best-seller")}
                  href="#"
                  className={`tab-button ${
                    activeTab === "best-seller" ? "active" : ""
                  }`}
                >
                  Best Seller
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => handleTabClick(e, "most-view")}
                  href="#"
                  className={`tab-button ${
                    activeTab === "most-view" ? "active" : ""
                  }`}
                >
                  Most View
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => handleTabClick(e, "discounts")}
                  href="#"
                  className={`tab-button ${
                    activeTab === "discounts" ? "active" : ""
                  }`}
                >
                  Discounts
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-12">
            <div className="tab-content">
              <div className="tab-pane active">
                <div className="row">
                  {products.map((product) => (
                    <ProductsTabItem key={product.id} productItem={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
