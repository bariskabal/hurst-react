import React from "react";
import HeadingBanner from "../HeadingBanner/HeadingBanner";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import "./Cart.css"
import CartOrderComplete from "./CartOrder/CartOrderComplete";
import CartTab from "./CartTab/CartTab";
import Checkout from "./Checkout/Checkout";
import { useState } from "react";

export default function Cart() {

  const [cartPane, setCartPane] = useState('cart')

  document.body.style.backgroundColor = "#f6f6f6";

  return (
    <React.Fragment>
      <Header />
      <HeadingBanner pageName={cartPane}/>
      <div className="shopping-cart-area  pt-80 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shopping-cart">
                <ul className="cart-page-menu d-flex mb-30">
                  <li>
                    <a
                      onClick={() => setCartPane('cart')}
                      className={`${cartPane == 'cart' && "active"}`}
                      href="#shopping-cart"
                      data-bs-toggle="tab"
                    >
                      shopping cart
                    </a>
                  </li>
                  <li>
                    <a 
                     onClick={() => setCartPane('Checkout')}
                    className={`${cartPane == 'Checkout' && "active"}`} href="#check-out" data-bs-toggle="tab">
                      check out
                    </a>
                  </li>
                  <li>
                    <a
                     onClick={() => setCartPane('Order Complete')}  
                    className={`${cartPane == 'Order Complete' && "active"}`} href="#order-complete" data-bs-toggle="tab">
                      order complete
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                    {cartPane == 'cart' && <CartTab/>}
                    {cartPane == 'Checkout' && <Checkout />}
                    {cartPane == 'Order Complete' && <CartOrderComplete />}
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
