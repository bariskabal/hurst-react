import ProductGalleryThumbs from "../Gallery/ProductGalleryThumbs";
import PropTypes from "prop-types";
import { useState } from "react";

export default function ProductInfo({ productImages, setActiveImg }) {
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleIncrement = () => {
    setCartItemCount(cartItemCount + 1);
  };

  const handleDecrement = () => {
    if (cartItemCount > 0) {
      setCartItemCount(cartItemCount - 1);
    }
  };

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10); // Değerin sayısal olmasını sağlayın
    setCartItemCount(newValue);
  };

  return (
    <div className="product-info">
      <div className="fix">
        <h4 className="post-title floatleft">dummy Product name</h4>
        <span className="pro-rating floatright">
          <a href="#">
            <i className="zmdi zmdi-star"></i>
          </a>
          <a href="#">
            <i className="zmdi zmdi-star"></i>
          </a>
          <a href="#">
            <i className="zmdi zmdi-star"></i>
          </a>
          <a href="#">
            <i className="zmdi zmdi-star-half"></i>
          </a>
          <a href="#">
            <i className="zmdi zmdi-star-half"></i>
          </a>
          <span>( 27 Rating )</span>
        </span>
      </div>
      <div className="fix mb-20">
        <span className="pro-price">$ 56.20</span>
      </div>
      <div className="product-description">
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have be suffered alteration in some form, by injected
          humou or randomised words which donot look even slightly believable.
          If you are going to use a passage of Lorem Ipsum.{" "}
        </p>
      </div>
      <div className="color-filter single-pro-color mb-20 clearfix">
        <ul>
          <li>
            <span className="color-title text-capitalize">color</span>
          </li>
          <li>
            <a className="active" href="#">
              <span className="color color-1"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="color color-2"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="color color-7"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="color color-3"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="color color-4"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="size-filter single-pro-size mb-35 clearfix">
        <ul>
          <li>
            <span className="color-title text-capitalize">size</span>
          </li>
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
      <div className="clearfix">
        <div className="cart-plus-minus">
          <div onClick={handleDecrement} className="dec qtybutton">
            -
          </div>
          <input
            type="text"
            value={cartItemCount}
            onChange={handleInputChange}
            className="cart-plus-minus-box"
          />
          <div onClick={handleIncrement} className="inc qtybutton">
            +
          </div>
        </div>
        <div className="product-action clearfix">
          <a
            href="wishlist.html"
            data-bs-toggle="tooltip"
            data-placement="top"
            title="Wishlist"
          >
            <i className="zmdi zmdi-favorite-outline"></i>
          </a>
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#productModal"
            title="Quick View"
          >
            <i className="zmdi zmdi-zoom-in"></i>
          </a>
          <a
            href="#"
            data-bs-toggle="tooltip"
            data-placement="top"
            title="Compare"
          >
            <i className="zmdi zmdi-refresh"></i>
          </a>
          <a
            href="cart.html"
            data-bs-toggle="tooltip"
            data-placement="top"
            title="Add To Cart"
          >
            <i className="zmdi zmdi-shopping-cart-plus"></i>
          </a>
        </div>
      </div>
      <ProductGalleryThumbs
        productImages={productImages}
        setActiveImg={setActiveImg}
      />
    </div>
  );
}

ProductInfo.propTypes = {
  productImages: PropTypes.array,
  setActiveImg: PropTypes.func,
};
