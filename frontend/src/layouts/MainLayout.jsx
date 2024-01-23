import React from "react";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import SearchModal from "../components/Modal/Search/SearchModal";
import PropTypes from "prop-types";

export default function MainLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <SearchModal />
      <Footer />
    </React.Fragment>
  );
}

MainLayout.propTypes = {
  children: PropTypes.array,
};
