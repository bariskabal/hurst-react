import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../actions/cartActions';

export default function ProductsTabItem({ productItem, setModalProduct, setProductDetailModals }) {
  const dispatch = useDispatch();
  const handleAddFromCart = (productItem) => {
    dispatch(addToCart(productItem));
  };

  return (
    <div className="single-product col-xl-3 col-lg-4 col-md-6">
      <div className="product-img">
        <span className={`pro-label ${productItem.title}-label`}>{productItem.title}</span>
        <Link to={"/product/123"}>
          <img src={productItem.img.singleImage} alt="" />
        </Link>
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
            onClick={() => {setModalProduct(productItem),setProductDetailModals(true)}}
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
            onClick={() => handleAddFromCart(productItem)}
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
          <p className="category-info floatright hidden-sm">{productItem.category}</p>
        </div>
        <div className="fix">
          <span className="pro-price floatleft">$ {productItem.price}</span>
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

ProductsTabItem.propTypes = {
  productItem: PropTypes.object,
  setModalProduct: PropTypes.func,
  setProductDetailModals: PropTypes.func,
};
