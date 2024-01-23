import React from "react";
import HeadingBanner from "../HeadingBanner/HeadingBanner";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";

export default function WishList() {
  document.body.classList.add('bg-dark-white');

  return (
    <React.Fragment>
      <Header />
      <HeadingBanner pageName="WISHLIST" />
      <div className="bg-white container mt-80">
        <div className="shop-cart-table">
          <div className="table-content table-responsive">
            <table>
              <thead>
                <tr>
                  <th className="product-thumbnail">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-stock">stock status</th>
                  <th className="product-add-cart">Add to cart</th>
                  <th className="product-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-thumbnail  text-left">
                    <div className="single-product d-flex flex-row">
                      <div className="product-img">
                        <a href="single-product.html">
                          <img src="img/product/2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-info">
                        <h4 className="post-title">
                          <a className="text-light-black" href="#">
                            dummy product name
                          </a>
                        </h4>
                        <p className="mb-0">Color : Black</p>
                        <p className="mb-0">Size : SL</p>
                      </div>
                    </div>
                  </td>
                  <td className="product-price">$56.00</td>
                  <td className="product-stock">in stock</td>
                  <td className="product-add-cart">
                    <a className="text-light-black" href="#">
                      <i className="zmdi zmdi-shopping-cart-plus"></i>
                    </a>
                  </td>
                  <td className="product-remove">
                    <a href="#">
                      <i className="zmdi zmdi-close"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="product-thumbnail  text-left">
                    <div className="single-product d-flex flex-row">
                      <div className="product-img">
                        <a href="single-product.html">
                          <img src="img/product/12.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-info">
                        <h4 className="post-title">
                          <a className="text-light-black" href="#">
                            dummy product name
                          </a>
                        </h4>
                        <p className="mb-0">Color : Black</p>
                        <p className="mb-0">Size : SL</p>
                      </div>
                    </div>
                  </td>
                  <td className="product-price">$56.00</td>
                  <td className="product-stock">in stock</td>
                  <td className="product-add-cart">
                    <a className="text-light-black" href="#">
                      <i className="zmdi zmdi-shopping-cart-plus"></i>
                    </a>
                  </td>
                  <td className="product-remove">
                    <a href="#">
                      <i className="zmdi zmdi-close"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="product-thumbnail  text-left">
                    <div className="single-product d-flex flex-row">
                      <div className="product-img">
                        <a href="single-product.html">
                          <img src="img/product/6.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-info">
                        <h4 className="post-title">
                          <a className="text-light-black" href="#">
                            dummy product name
                          </a>
                        </h4>
                        <p className="mb-0">Color : Black</p>
                        <p className="mb-0">Size : SL</p>
                      </div>
                    </div>
                  </td>
                  <td className="product-price">$56.00</td>
                  <td className="product-stock">in stock</td>
                  <td className="product-add-cart">
                    <a className="text-light-black" href="#">
                      <i className="zmdi zmdi-shopping-cart-plus"></i>
                    </a>
                  </td>
                  <td className="product-remove">
                    <a href="#">
                      <i className="zmdi zmdi-close"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
