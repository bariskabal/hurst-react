import Proptypes from "prop-types";

export default function SliderItem({ productItem }) {
  return (
    <div className="single-product">
      <div className="product-img discount-product">
        <a href="single-product.html">
          <img src={productItem.img.singleImage} alt="" />
        </a>
        <div className="discount-img-brief">
          <div className="onsale">
            <span className="onsale-text">On Sale</span>
            <span className="onsale-price">$ 80.00</span>
          </div>
          <div className="discount-info">
            <h1 className="text-dark-red d-none d-md-block">Discount 50%</h1>
            <p className="d-none d-md-block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does
              eiusmodes tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim venim, quis nostrud exercitation ullamco laboris.
            </p>
            <a
              href="#"
              className="button-one font-16px style-3 text-uppercase mt-md-2"
              data-text="Buy now"
            >
              Buy now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

SliderItem.propTypes = {
  productItem: Proptypes.object,
};
