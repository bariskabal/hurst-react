import DiscountSliderItem from "./DiscountSliderItem";
import Slider from "react-slick";
import "./DiscountSlider.css";
import discounts from "../../../discount.json";

export default function DiscountSlider() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
            },
          }
        ],
      };
      

  return (
    <div className="product-area pb-35 products discount">
      <div className="container">
        <div className="product-wrapper product-carousel">
          <Slider {...sliderSettings}>
            {discounts.map((product) => (
              <DiscountSliderItem productItem={product} key={product.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
