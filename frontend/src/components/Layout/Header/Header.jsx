import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import CartModal from "../../Modal/Cart/CartModal";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { toggleSearchModal } from "../../../actions/modalActions";
import { logoutUser } from "../../../actions/authActions";
import { message, Popover } from "antd";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMenuMobil, setToggleMenuMobil] = useState(false);
  const [toggleHomeMenu, setToggleHomeMenu] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const [hovered, setHovered] = useState(false);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
    message.success("Çıkış işlemi başarılı");
  };

  const content = (
    <div className="d-flex flex-column">
      <p>Çıkış yapmak istediğinize emin misiniz?</p>
      <button className="btn bg-primary text-white" onClick={handleLogout}>Çıkış yap</button>
    </div>
  );

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <div className="mobile-header-top d-block d-md-none">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-search-mobile">
                <div className="table">
                  <div className="table-cell">
                    <ul className="mb-0">
                      <li>
                        <a
                          onClick={() => dispatch(toggleSearchModal())}
                          className="search-open"
                          href="#"
                        >
                          <i className="zmdi zmdi-search"></i>
                        </a>
                      </li>
                      {token ? (
                        <li>
                          <Popover
                            content={content}
                            placement="bottom"
                            trigger="click"
                          >
                            <Link>
                              <IoLogOut className="mb-1" />
                            </Link>
                          </Popover>
                        </li>
                      ) : (
                        <li>
                          <Link to={"/auth/registration"}>
                            <i className="zmdi zmdi-lock"></i>
                          </Link>
                        </li>
                      )}
                      {token && (
                        <li>
                          <Link to={"/account"} title="My-Account">
                            <i className="zmdi zmdi-account"></i>
                          </Link>
                        </li>
                      )}
                      <li>
                        <Link to={"/wishlist"} title="Wishlist">
                          <i className="zmdi zmdi-favorite"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header id="sticky-menu" className="header">
        <div className="header-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 offset-md-4 col-7">
                <div className="logo text-md-center">
                  <Link to={"/"}>
                    <img src="/src/assets/img/logo/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-md-4 col-5">
                <div className="mini-cart text-end">
                  <ul>
                    <li>
                      <a
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="cart-icon"
                        href="#"
                      >
                        <IoMdCart />
                        <span>
                          {cartItems?.length > 0 ? cartItems.length : 0}
                        </span>
                      </a>
                      <CartModal hoveredCartModal={hovered} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => setToggleMenu(!toggleMenu)}
          className={`menu-toggle hamburger hamburger--emphatic d-none d-md-block ${
            toggleMenu ? "active" : ""
          }`}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
        <div
          className={`main-menu d-none d-md-block ${
            toggleMenu ? "open" : "close"
          }`}
        >
          <nav>
            <ul>
              <li>
                <a href="index.html">home</a>
                <div className="sub-menu menu-scroll">
                  <ul>
                    <li className="menu-title">Pages</li>
                    <li>
                      <a href="index.html">Home Version 1</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home Version 2</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="shop.html">products</a>
                <div className="mega-menu menu-scroll">
                  <div className="table">
                    <div className="table-cell">
                      <div className="half-width">
                        <ul>
                          <li className="menu-title">best brands</li>
                          <li>
                            <a href="#">henning koppel</a>
                          </li>
                          <li>
                            <a href="#">jehs + Laub</a>
                          </li>
                          <li>
                            <a href="#">vicke lindstrand</a>
                          </li>
                          <li>
                            <a href="#">don chadwick</a>
                          </li>
                          <li>
                            <a href="#">akiko kuwahata</a>
                          </li>
                          <li>
                            <a href="#">barbro berlin</a>
                          </li>
                          <li>
                            <a href="#">cecilia hall</a>
                          </li>
                          <li>
                            <a href="#">don chadwick</a>
                          </li>
                        </ul>
                      </div>
                      <div className="half-width">
                        <ul>
                          <li className="menu-title">popular brands</li>
                          <li>
                            <a href="#">akiko kuwahata</a>
                          </li>
                          <li>
                            <a href="#">barbro berlin</a>
                          </li>
                          <li>
                            <a href="#">cecilia hall</a>
                          </li>
                          <li>
                            <a href="#">don chadwick</a>
                          </li>
                          <li>
                            <a href="#">henning koppel</a>
                          </li>
                          <li>
                            <a href="#">jehs + Laub</a>
                          </li>
                          <li>
                            <a href="#">vicke lindstrand</a>
                          </li>
                          <li>
                            <a href="#">don chadwick</a>
                          </li>
                        </ul>
                      </div>
                      <div className="full-width">
                        <div className="mega-menu-img">
                          <a href="single-product.html">
                            <img src="img/megamenu/1.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="pb-80"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">Shortcodes</a>
                <div className="sub-menu menu-scroll">
                  <ul>
                    <li className="menu-title">Shortcodes</li>
                    <li>
                      <a href="elements-accordions.html">Accordion</a>
                    </li>
                    <li>
                      <a href="elements-toggles.html">Toggles</a>
                    </li>
                    <li>
                      <a href="elements-tab.html">Tab</a>
                    </li>
                    <li>
                      <a href="elements-product-tab.html">Product Tab</a>
                    </li>
                    <li>
                      <a href="elements-product-tab-2.html">Product Tab 2</a>
                    </li>
                    <li>
                      <a href="elements-carousel.html">product carousel</a>
                    </li>
                    <li>
                      <a href="elements-carousel-2.html">product carousel 2</a>
                    </li>
                    <li>
                      <a href="elements-featured-product.html">
                        Featured Product
                      </a>
                    </li>
                    <li>
                      <a href="elements-featured-product-2.html">
                        Featured Product 2
                      </a>
                    </li>
                    <li>
                      <a href="elements-button.html">Button</a>
                    </li>
                    <li>
                      <a href="elements-table.html">Table</a>
                    </li>
                    <li>
                      <a href="elements-progress-bars.html">Progress Bar</a>
                    </li>
                    <li>
                      <a href="elements-blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="elements-blog-2.html">Blog - 2</a>
                    </li>
                    <li>
                      <a href="elements-team.html">Team</a>
                    </li>
                    <li>
                      <a href="elements-footer.html">Footer</a>
                    </li>
                    <li>
                      <a href="elements-footer-2.html">Footer 2</a>
                    </li>
                    <li>
                      <a href="elements-map.html">Map</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="shop-sidebar.html">accesories</a>
              </li>
              <li>
                <a href="shop-list.html">lookbook</a>
              </li>
              <li>
                <a href="blog.html">blog</a>
              </li>
              <li>
                <a href="#">pages</a>
                <div className="sub-menu menu-scroll">
                  <ul>
                    <li className="menu-title">Pages</li>
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="shop-sidebar.html">Shop Sidebar</a>
                    </li>
                    <li>
                      <a href="shop-grid-right-sidebar.html">
                        Shop Right Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="shop-list.html">Shop List</a>
                    </li>
                    <li>
                      <a href="shop-list-right-sidebar.html">
                        Shop List right sidebar
                      </a>
                    </li>
                    <li>
                      <a href="single-product.html">Single Product</a>
                    </li>
                    <li>
                      <a href="single-product-sidebar.html">
                        Single Product Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="cart.html">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="order.html">Order</a>
                    </li>
                    <li>
                      <a href="login.html">login / Registration</a>
                    </li>
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                    <li>
                      <a href="404.html">404</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="single-blog.html">Single Blog</a>
                    </li>
                    <li>
                      <a href="single-blog-sidebar.html">Single Blog Sidebar</a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="about.html">about us</a>
              </li>
              <li>
                <a href="contact.html">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="mobile-menu-area">
        <div className="container-fluid mean-container">
          <div className="row">
            <div className="col-xs-12 d-block d-md-none mobile-toggle">
              <div className="mean-bar">
                {!toggleMenuMobil ? (
                  <a
                    onClick={() => setToggleMenuMobil(!toggleMenuMobil)}
                    className="meanmenu-reveal"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                ) : (
                  <a
                    onClick={() => setToggleMenuMobil(!toggleMenuMobil)}
                    className="meanmenu-reveal meanclose"
                  >
                    X
                  </a>
                )}

                <nav className="mean-nav">
                  <ul
                    className={`${toggleMenuMobil ? "open" : "closeMobilMenu"}`}
                  >
                    <li>
                      <a href="index.html">home</a>
                      <ul className={`${!toggleHomeMenu ? "d-none" : ""}`}>
                        <li>
                          <a href="index.html">Home Version 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home Version 2</a>
                        </li>
                      </ul>
                      {!toggleHomeMenu ? (
                        <a
                          className="mean-expand"
                          style={{ cursor: "pointer" }}
                          onClick={() => setToggleHomeMenu(!toggleHomeMenu)}
                        >
                          +{" "}
                        </a>
                      ) : (
                        <a
                          onClick={() => setToggleHomeMenu(!toggleHomeMenu)}
                          className="mean-expand mean-clicked"
                          style={{ cursor: "pointer", fontSize: "18px" }}
                        >
                          -
                        </a>
                      )}
                    </li>
                    <li>
                      <a href="shop.html">products</a>
                    </li>
                    <li>
                      <a href="shop-sidebar.html">accesories</a>
                    </li>
                    <li>
                      <a href="shop-list.html">lookbook</a>
                    </li>
                    <li>
                      <a href="blog.html">blog</a>
                    </li>
                    <li>
                      <a href="#">pages</a>
                      <ul className="d-none">
                        <li>
                          <a href="shop.html">Shop</a>
                        </li>
                        <li>
                          <a href="shop-sidebar.html">Shop Sidebar</a>
                        </li>
                        <li>
                          <a href="shop-list.html">Shop List</a>
                        </li>
                        <li>
                          <a href="single-product.html">Single Product</a>
                        </li>
                        <li>
                          <a href="single-product-sidebar.html">
                            Single Product Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="cart.html">Shopping Cart</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="order.html">Order</a>
                        </li>
                        <li>
                          <a href="login.html">login / Registration</a>
                        </li>
                        <li>
                          <a href="my-account.html">My Account</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="single-blog.html">Single Blog</a>
                        </li>
                        <li>
                          <a href="single-blog-sidebar.html">
                            Single Blog Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                      <a className="mean-expand" href="#">
                        +
                      </a>
                    </li>
                    <li>
                      <a href="about.html">about us</a>
                    </li>
                    <li className="mean-last">
                      <a href="contact.html">contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mobile-menu">
                <nav id="dropdown" className="d-none">
                  <ul>
                    <li>
                      <a href="index.html">home</a>
                      <ul>
                        <li>
                          <a href="index.html">Home Version 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home Version 2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop.html">products</a>
                    </li>
                    <li>
                      <a href="shop-sidebar.html">accesories</a>
                    </li>
                    <li>
                      <a href="shop-list.html">lookbook</a>
                    </li>
                    <li>
                      <a href="blog.html">blog</a>
                    </li>
                    <li>
                      <a href="#">pages</a>
                      <ul>
                        <li>
                          <a href="shop.html">Shop</a>
                        </li>
                        <li>
                          <a href="shop-sidebar.html">Shop Sidebar</a>
                        </li>
                        <li>
                          <a href="shop-list.html">Shop List</a>
                        </li>
                        <li>
                          <a href="single-product.html">Single Product</a>
                        </li>
                        <li>
                          <a href="single-product-sidebar.html">
                            Single Product Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="cart.html">Shopping Cart</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="order.html">Order</a>
                        </li>
                        <li>
                          <a href="login.html">login / Registration</a>
                        </li>
                        <li>
                          <a href="my-account.html">My Account</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="single-blog.html">Single Blog</a>
                        </li>
                        <li>
                          <a href="single-blog-sidebar.html">
                            Single Blog Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">about us</a>
                    </li>
                    <li>
                      <a href="contact.html">contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
