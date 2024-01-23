import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../actions/cartActions';
import { openModalWithProduct } from "../../../actions/modalActions";
import Image from "../../../utils/Image";

export default function ProductsTabItem({ productItem}) {
  const dispatch = useDispatch();
  const handleAddFromCart = (productItem) => {
    dispatch(addToCart(productItem));
  };
  const handleOpenModal = () => {
    dispatch(openModalWithProduct(productItem));
};

  return (
    <div className="single-product col-xl-3 col-lg-4 col-md-6">
      <div className="product-img">
        {productItem.discount > 0 && <span className={`pro-label sale-label`}>Discounted</span>}
        <Link to={`/product/${productItem._id}`}>
          <Image style={{minHeight:"317px"}} imageUrl={productItem.stockStatuses[0].images[0]}
            />
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
            onClick={() => {handleOpenModal(productItem)}}
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
          <p className="category-info floatright hidden-sm">{productItem.category.name}</p>
        </div>
        <div className="fix">
          <span className="pro-price floatleft">$ {productItem.discount > 0 ? productItem.price * (1 - productItem.discount / 100) :productItem.price}</span>
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
