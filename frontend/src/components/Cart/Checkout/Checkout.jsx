import AddressForm from "./AddressForm";
import CartOrderDetail from "../CartOrderDetail";
import PaymentMethod from "../PaymentMethod/PaymentMethod";

export default function Checkout() {

  return (
    <div className="tab-pane active">
      <form action="#">
        <div className="shop-cart-table check-out-wrap">
          <div className="row">
            <div className="col-md-6">
              <AddressForm title="Billing Details" />
            </div>
            <div className="col-md-6 mt-xs-30">
              <AddressForm title="SHIP TO DIFFERENT ADDRESS" />
            </div>
            <div className="col-md-6">
              <CartOrderDetail pageName={'checkout'}/>
            </div>
            <div className="col-md-6">
              <PaymentMethod pageName={'checkout'}/>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
