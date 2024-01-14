import { useSelector } from 'react-redux';

export default function CartTotals() {
  const cartTotal = useSelector(state => state.cart.total);
  const cargoFee = 20;
  const orderTotal = cartTotal + cargoFee
  return (
    <div className="col-md-6">
      <div className="customer-login payment-details mt-30">
        <h4 className="title-1 title-border text-uppercase">payment details</h4>
        <table>
          <tbody>
            <tr>
              <td className="text-left">Cart Subtotal</td>
              <td className="text-end">${cartTotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="text-left">Cargo</td>
              <td className="text-end">${cargoFee.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="text-left">Order Total</td>
              <td className="text-end">${orderTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
