import Proptypes from "prop-types";

export default function CartModalItem({cartItem}) {
    console.log(cartItem);
    return(
        <div className="single-cart clearfix">
          <div className="cart-photo">
            <a href="#">
              <img src="/src/assets/img/product/2.jpg" alt="" />
            </a>
          </div>
          <div className="cart-info">
            <h5>
              <a href="#">dummy product name</a>
            </h5>
            <p className="mb-0">Price : $ 300.00</p>
            <p className="mb-0">Qty : 01 </p>
            <span className="cart-delete">
              <a href="#">
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