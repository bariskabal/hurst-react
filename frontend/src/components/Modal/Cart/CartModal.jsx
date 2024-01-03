import Proptypes from "prop-types";
import "./CartModal.css";
import CartModalItem from "./CartModalItem";
import CartModalTotal from "./CartModalTotal";

export default function CartModal({hoveredCartModal}) {
  return (
    <div className={`mini-cart-brief text-left ${hoveredCartModal ? 'hovered-modal' : ''}`}>
      <div className="cart-items">
        <p className="mb-0">
          You have <span>03 items</span> in your shopping bag
        </p>
      </div>
      <div className="all-cart-product clearfix">
        <CartModalItem />
        <CartModalItem />
      </div>
      <CartModalTotal />
      <div className="cart-bottom  clearfix">
        <a
          href="cart.html"
          className="button-one floatleft text-uppercase"
          data-text="View cart"
        >
          View cart
        </a>
        <a
          href="checkout.html"
          className="button-one floatright text-uppercase"
          data-text="Check out"
        >
          Check out
        </a>
      </div>
    </div>
  );
}

CartModal.propTypes = {
    hoveredCartModal: Proptypes.bool
}