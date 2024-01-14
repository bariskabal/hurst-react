export default function CartCoupon() {
  return (
    <div className="col-md-6">
      <div className="customer-login mt-30">
        <h4 className="title-1 title-border text-uppercase">coupon discount</h4>
        <p className="text-gray">Enter your coupon code if you have one!</p>
        <input type="text" placeholder="Enter your code here." />
        <button
          type="submit"
          data-text="apply coupon"
          className="button-one submit-button mt-15"
        >
          apply coupon
        </button>
      </div>
    </div>
  );
}
