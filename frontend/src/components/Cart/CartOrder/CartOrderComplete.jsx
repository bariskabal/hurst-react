import CartOrderDetail from "../CartOrderDetail"
import PaymentMethod from "../PaymentMethod/PaymentMethod";

export default function CartOrderComplete() {
  return (
    <div className="tab-pane active">
      <form action="#">
        <div className="thank-recieve bg-white mb-30">
          <p>Thank you. Your order has been received.</p>
        </div>
        <div className="order-info bg-white text-center clearfix mb-30">
          <div className="single-order-info">
            <h4 className="title-1 text-uppercase text-light-black mb-0">
              order no
            </h4>
            <p className="text-uppercase text-light-black mb-0">
              <strong>m 2653257</strong>
            </p>
          </div>
          <div className="single-order-info">
            <h4 className="title-1 text-uppercase text-light-black mb-0">
              Date
            </h4>
            <p className="text-uppercase text-light-black mb-0">
              <strong>june 15, 2021</strong>
            </p>
          </div>
          <div className="single-order-info">
            <h4 className="title-1 text-uppercase text-light-black mb-0">
              Total
            </h4>
            <p className="text-uppercase text-light-black mb-0">
              <strong>$ 170.00</strong>
            </p>
          </div>
          <div className="single-order-info">
            <h4 className="title-1 text-uppercase text-light-black mb-0">
              payment method
            </h4>
            <p className="text-uppercase text-light-black mb-0">
              <a href="#">
                <strong>check payment</strong>
              </a>
            </p>
          </div>
        </div>
        <div className="shop-cart-table check-out-wrap">
          <div className="row">
            <div className="col-md-6">
              <CartOrderDetail pageName="orderComplete" />
            </div>
            <div className="col-md-6 mt-xs-30">
              <PaymentMethod pageName="orderComplete" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
