import { useState } from "react";
import Proptypes from "prop-types";
import { removeFromCart,addToCart, removeFromAll } from '../../../actions/cartActions';
import { useDispatch } from "react-redux";

export default function CartTabItem({item}) {

  const [cartItemCount, setCartItemCount] = useState(item.quantity);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setCartItemCount(cartItemCount + 1);
    dispatch(addToCart(item));
  };

  const handleDecrement = () => {
    if (cartItemCount > 1) {
      setCartItemCount(cartItemCount - 1);
      dispatch(removeFromCart(item));
    } else {
      dispatch(removeFromAll(item));
    }
  };

  const handleDeleteAllItem = () => {
    dispatch(removeFromAll(item));
  }

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10); // Değerin sayısal olmasını sağlayın
    setCartItemCount(newValue);
  };
  return (
    <tr>
      <td className="product-thumbnail  text-left">
        <div className="single-product">
          <div className="product-img">
            <a href="single-product.html">
              <img src="img/product/2.jpg" alt="" />
            </a>
          </div>
          <div className="product-info">
            <h4 className="post-title">
              <a className="text-light-black" href="#">
                {item.name}
              </a>
            </h4>
            <p className="mb-0">Color : Black</p>
            <p className="mb-0">Size : SL</p>
          </div>
        </div>
      </td>
      <td className="product-price">${item.price.toFixed(2)}</td>
      <td className="product-quantity">
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
      </td>
      <td className="product-subtotal">${item.price.toFixed(2)*item.quantity}</td>
      <td className="product-remove">
        <a onClick={() => handleDeleteAllItem()}>
          <i className="zmdi zmdi-close"></i>
        </a>
      </td>
    </tr>
  );
}

CartTabItem.propTypes = {
  item: Proptypes.object
}