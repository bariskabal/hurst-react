import Slider from "react-slick";
import PropTypes from "prop-types";
import products from "../../../data.json";
import ProductSliderItem from "./ProductSliderItem";
import "./ProductSlider.css";

function NextBtn({ onClick }) {
  return (
    <button onClick={onClick} className="slick-next-icon slick-arrow glide__arrow glide__arrow--left">
        n<br/>e<br/>x<br/>t
    </button>

  );
}

NextBtn.propTypes = {
  onClick: PropTypes.func,
};

function PrevBtn({ onClick }) {
  return (
    <button onClick={onClick} className="slick-prev-icon slick-arrow glide__arrow glide__arrow--left">
    p<br/>r<br/>e<br/>v
</button>
  );
}

PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextBtn />,
  prevArrow: <PrevBtn />,
  autoplaySpeed: 3000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function ProductSlider() {
  return (
    <div className="product-area pt-80 pb-35 products">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="title-border">Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div className="product-wrapper product-carousel">
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <ProductSliderItem productItem={product} key={product.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
