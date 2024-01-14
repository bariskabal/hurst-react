import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import "./CartModal.css";
import CartModalItem from "./CartModalItem";
import CartModalTotal from "./CartModalTotal";
import { useSelector } from 'react-redux';

export default function CartModal({hoveredCartModal}) {
  const cartItems = useSelector(state => state.cart.items);
  return (
    <div className={`mini-cart-brief text-left ${hoveredCartModal ? 'hovered-modal' : ''}`}>
      <div className="cart-items">
        <p className="mb-0">
          You have <span>{cartItems.length} items</span> in your shopping bag
        </p>
      </div>
      <div className="all-cart-product clearfix">
        {cartItems.map((cartItem,index) => (
          <CartModalItem key={index} cartItem={cartItem} />
        ))}
      </div>
      <CartModalTotal />
      <div className="cart-bottom  clearfix">
        <Link
          to={"/cart"}
          className="button-one w-100 text-uppercase"
          data-text="View cart"
          style={{textAlign:'center'}}
        >
          View cart
        </Link>
      </div>
    </div>
  );
}

CartModal.propTypes = {
    hoveredCartModal: Proptypes.bool
}