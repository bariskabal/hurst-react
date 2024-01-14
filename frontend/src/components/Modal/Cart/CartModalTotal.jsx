import { useSelector } from 'react-redux';

export default function CartModalTotal() {
  const cartTotal = useSelector(state => state.cart.total);
  return (
    <div className="cart-totals">
      <h5 className="mb-0">
        Total&nbsp;&nbsp;:<span className="floatright">&nbsp;${cartTotal}</span>
      </h5>
    </div>
  );
}
