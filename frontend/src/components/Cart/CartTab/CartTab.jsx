import CartCoupon from "../CartCoupon";
import CartTotals from "../CartTotals";
import CartTabItem from "./CartTabItem";
import { useSelector } from 'react-redux';

export default function CartPane() {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className="tab-pane active">
      <form action="#">
        <div className="shop-cart-table">
          <div className="table-content table-responsive">
            <table>
              <thead>
                <tr>
                  <th className="product-thumbnail">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-subtotal">Total</th>
                  <th className="product-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length != 0 ? cartItems.map((item,index) => (
                  <CartTabItem key={index} item={item}/>
                )) : <tr>
                <td className="text-center" colSpan="12">
                  Sepet boş
                </td>
              </tr>}
                
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <CartCoupon />
          <CartTotals />
        </div>
      </form>
    </div>
  );
}
