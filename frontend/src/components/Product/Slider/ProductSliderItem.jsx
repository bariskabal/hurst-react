import Proptypes from "prop-types";

export default function ProductSliderItem({productItem}) {
  return (
    <div className="single-product">
      <div className="product-img">
        <span className={`pro-label ${productItem.title}-label`}>{productItem.title}</span>
        <a href="single-product.html">
          <img src={productItem.img.singleImage} alt="" />
        </a>
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
      <div className="product-info clearfix">
        <div className="fix">
          <h4 className="post-title floatleft">
            <a href="#">{productItem.name}</a>
          </h4>
          <p className="category-info floatright hidden-sm d-none d-md-block">Furniture</p>
        </div>
        <div className="fix">
          <span className="pro-price floatleft">${productItem.price}</span>
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
          </span>
        </div>
      </div>
    </div>
  );
}


ProductSliderItem.propTypes = {
    productItem: Proptypes.object
}