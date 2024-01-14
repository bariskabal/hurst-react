import Proptypes from "prop-types";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../actions/cartActions';

export default function CartModalItem({cartItem}) {
  const dispatch = useDispatch();
  const handleRemoveFromCart = (productItem) => {
    dispatch(removeFromCart(productItem));
  };
    return(
        <div className="single-cart clearfix">
          <div className="cart-photo">
            <a href="#">
              <img src="/src/assets/img/product/2.jpg" alt="" />
            </a>
          </div>
          <div className="cart-info">
            <h5>
              <a href="#">{cartItem.name}</a>
            </h5>
            <p className="mb-0">Price : $ {cartItem.price}</p>
            <p className="mb-0">Qty : {cartItem.quantity} </p>
            <span className="cart-delete">
              <a onClick={() => handleRemoveFromCart(cartItem)}>
                <i className="zmdi zmdi-close"></i>
              </a>
            </span>
          </div>
        </div>
    )
}

CartModalItem.propTypes = {
    cartItem: Proptypes.object
}