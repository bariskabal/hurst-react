import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";

export default function Reviews() {
  return (
    <div className="tab-pane active" id="reviews">
      <div className="pro-tab-info pro-reviews">
        <div className="customer-review mb-60">
          <h3 className="tab-title title-border mb-30">Customer review</h3>
          <ul className="product-comments clearfix">
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </ul>
        </div>
        <ReviewForm />
      </div>
    </div>
  );
}
