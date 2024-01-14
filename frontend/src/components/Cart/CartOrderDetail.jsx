import Proptypes from "prop-types";
import { useSelector } from "react-redux";

export default function OrderDetail({ pageName }) {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector(state => state.cart.total);
  const cargoFee = 20;
  const orderTotal = cartTotal + cargoFee
  return (
    <div
      className={`our-order payment-details pr-20 ${
        pageName == "orderComplete" ? "" : "mt-60"
      }`}
    >
      <h4 className="title-1 title-border text-uppercase mb-30">our order</h4>
      <table>
        <thead>
          <tr>
            <th>
              <strong>Product</strong>
            </th>
            <th className="text-end">
              <strong>Total</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td className="text-end">${item.price.toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td>Cargo</td>
            <td className="text-end">${cargoFee.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Order Total</td>
            <td className="text-end">${orderTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

OrderDetail.propTypes = {
  pageName: Proptypes.string,
};
