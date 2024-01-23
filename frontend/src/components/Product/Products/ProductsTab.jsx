import { useState, useEffect } from "react";
import "./ProductsTab.css";
import ProductsTabItem from "./ProductsTabItem";
import ProductService from "../../../services/productService";

export default function Products() {
  const [activeTab, setActiveTab] = useState("new-arrivals");
  const [products,setProducts] = useState([])
  const handleTabClick = (e, tab) => {
    setActiveTab(tab);
    e.preventDefault();
  };

  useEffect(() => {

    async function getMostLikedProducts() {
      try {
        const response = await ProductService.getMostLikedProducts();
        if (response.success) {
          setProducts(response.data); // Verileri state'e ayarla
        } else {
          // Hata durumunda bir şey yapabilirsiniz
          console.error("Ürünleri çekerken hata oluştu:", response.message);
        }
      } catch (error) {
        // Hata durumunda bir şey yapabilirsiniz
        console.error("Ürünleri çekerken hata oluştu:", error);
      }
    }

    async function getBestSellerProducts() {
      try {
        const response = await ProductService.getBestSellerProducts();
        console.log(response)
        if (response.success) {
          setProducts(response.data); // Verileri state'e ayarla
        } else {
          // Hata durumunda bir şey yapabilirsiniz
          console.error("Ürünleri çekerken hata oluştu:", response.message);
        }
      } catch (error) {
        // Hata durumunda bir şey yapabilirsiniz
        console.error("Ürünleri çekerken hata oluştu:", error);
      }
    }

    async function getDiscountsProducts() {
      try {
        const response = await ProductService.getDiscountsProducts();
        console.log(response)
        if (response.success) {
          setProducts(response.data); // Verileri state'e ayarla
        } else {
          // Hata durumunda bir şey yapabilirsiniz
          console.error("Ürünleri çekerken hata oluştu:", response.message);
        }
      } catch (error) {
        // Hata durumunda bir şey yapabilirsiniz
        console.error("Ürünleri çekerken hata oluştu:", error);
      }
    }

    async function getNewArrivals() {
      try {
        const response = await ProductService.getNewArrivals();
        if (response.success) {
          setProducts(response.data); // Verileri state'e ayarla
        } else {
          // Hata durumunda bir şey yapabilirsiniz
          console.error("Ürünleri çekerken hata oluştu:", response.message);
        }
      } catch (error) {
        // Hata durumunda bir şey yapabilirsiniz
        console.error("Ürünleri çekerken hata oluştu:", error);
      }
    }
    getNewArrivals();

    if(activeTab == "new-arrivals") {
      getNewArrivals();
    } else if(activeTab == "best-seller") {
      getBestSellerProducts();
    } else if(activeTab == "most-view") {
      getMostLikedProducts();
    } else if(activeTab == "discounts") {
      getDiscountsProducts();
    }
    console.log(activeTab)
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
                <div className="row slider-product">
                  {products.map((product) => (
                    <ProductsTabItem key={product._id} productItem={product} />
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