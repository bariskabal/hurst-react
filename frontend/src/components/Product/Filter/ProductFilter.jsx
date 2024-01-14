import React from "react";

export default function ProductFilter() {
    return(
        <React.Fragment>
            <aside className="widget widget-search mb-30">
                <form action="#">
                  <input type="text" placeholder="Search here..." />
                  <button type="submit">
                    <i className="zmdi zmdi-search"></i>
                  </button>
                </form>
              </aside>
              <aside className="widget widget-categories  mb-30">
                <div className="widget-title">
                  <h4>Categories</h4>
                </div>
                <div
                  id="cat-treeview"
                  className="widget-info product-cat boxscrol2"
                >
                  <ul className="treeview">
                    <li>
                      <span>Chair</span>
                    </li>
                    <li className="open">
                      <span>Furniture</span>
                    </li>
                    <li>
                      <span>Accessories</span>
                    </li>
                    <li>
                      <span>Top Brands</span>
                    </li>
                    <li>
                      <span>Jewelry</span>
                    </li>
                  </ul>
                </div>
              </aside>
              <aside className="widget shop-filter mb-30">
                <div className="widget-title">
                  <h4>Price</h4>
                </div>
                <div className="widget-info px-2">
                  <div className="price_filter">
                    <div className="price_slider_amount justify-content-around">
                      <div className="d-flex price_slider_item justify-content-between flex-column justify-content-center">
                        <label>Min</label>
                        <input
                          type="number"
                          placeholder="1-999999"
                          style={{ maxWidth: "80px" }}
                        />
                      </div>
                      <div className="d-flex price_slider_item flex-column justify-content-center">
                        <label>Max</label>
                        <input
                          type="number"
                          placeholder="1-999999"
                          style={{ maxWidth: "80px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              <aside className="widget widget-color mb-30">
                <div className="widget-title">
                  <h4>Color</h4>
                </div>
                <div className="widget-info color-filter clearfix">
                  <ul>
                    <li>
                      <a href="#">
                        <span className="color color-1"></span>LightSalmon
                        <span className="count">12</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="color color-2"></span>Dark Salmon
                        <span className="count">20</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="color color-3"></span>Tomato
                        <span className="count">59</span>
                      </a>
                    </li>
                    <li>
                      <a className="active" href="#">
                        <span className="color color-4"></span>Deep Sky Blue
                        <span className="count">45</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="color color-5"></span>Electric Purple
                        <span className="count">78</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="color color-6"></span>Atlantis
                        <span className="count">10</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="color color-7"></span>Deep Lilac
                        <span className="count">15</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
              <aside className="widget widget-size mb-30">
                <div className="widget-title">
                  <h4>Size</h4>
                </div>
                <div className="widget-info size-filter clearfix">
                  <ul>
                    <li>
                      <a href="#">M</a>
                    </li>
                    <li>
                      <a className="active" href="#">
                        S
                      </a>
                    </li>
                    <li>
                      <a href="#">L</a>
                    </li>
                    <li>
                      <a href="#">SL</a>
                    </li>
                    <li>
                      <a href="#">XL</a>
                    </li>
                  </ul>
                </div>
              </aside>
              <button className="border-1 filter-button w-100 p-2">
                Filter
              </button>
        </React.Fragment>
    )
}