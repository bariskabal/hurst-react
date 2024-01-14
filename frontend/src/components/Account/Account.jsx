import React from "react";
import { Link } from "react-router-dom";
import HeadingBanner from "../HeadingBanner/HeadingBanner";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import AccountDetailForm from "./AccountDetailForm";
import AllOrders from "./AllOrders";

export default function Account() {
  return (
    <React.Fragment>
      <Header />
      <HeadingBanner pageName="My Account" />
      <div className="my-account-area  pt-80 pb-80">
        <div className="container">
          <div className="my-account">
            <div className="row">
              <div className="col-md-12">
                <div className="panel-group" id="accordion">
                  <AccountDetailForm />
                  <AllOrders />
                </div>
              </div>
              <div className="col-md-12">
                <div className="panel mb-2 mt-2">
                  <div className="my-account-menu my-account-menu-2">
                    <Link to={"/wishlist"}>My Wishlist</Link>
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
