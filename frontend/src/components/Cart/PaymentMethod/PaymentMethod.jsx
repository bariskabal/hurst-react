import { useState } from "react";
import Proptypes from "prop-types";

export default function PaymentMethod({pageName}) {
  const [paymentToggle, setPaymentToggle] = useState(false);

  return (
    <div className={`payment-method pl-20 ${pageName == 'orderComplete' ? '' : 'mt-60'}`}>
      <h4 className="title-1 title-border text-uppercase mb-30">
        payment method
      </h4>
      <div className="payment-accordion">
        <h3
          onClick={() => setPaymentToggle(!paymentToggle)}
          className={`payment-accordion-toggle ${
            paymentToggle ? "active" : ""
          }`}
        >
          Online Payment
        </h3>
        <div className={`payment-content ${paymentToggle ? "default" : ""}`}>
          <p>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order wont be shipped until
            the funds have cleared in our account.
          </p>
        </div>
      </div>
      <button
        className="button-one payment-button submit-button mt-15"
        data-text="place order"
        type="submit"
      >
        proceed to payment
      </button>
    </div>
  );
}

PaymentMethod.propTypes = {
  pageName: Proptypes.string,
};