import Slider from "react-slick";
import PropTypes from "prop-types";

function PrevBtn({ onClick }) {
    return (
      <button
        className="single-pro-arrow arrow-left slick-arrow"
        data-glide-dir="<"
        onClick={onClick}
        style={{
          zIndex: "2",
        }}
      >
        <i className="zmdi zmdi-chevron-left"></i>
      </button>
    );
  }
  
  function NextBtn({ onClick }) {
    return (
      <button
        className="single-pro-arrow arrow-right slick-arrow"
        data-glide-dir=">"
        onClick={onClick}
        style={{
          zIndex: "",
        }}
      >
        <i className="zmdi zmdi-chevron-right"></i>
      </button>
    );
  }
  
  NextBtn.propTypes = {
    onClick: PropTypes.func,
  };
  
  PrevBtn.propTypes = {
    onClick: PropTypes.func,
  };

export default function ProductGalleryThumbs({setActiveImg,productImages}) {

    const sliderSettings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
    };
    return(
        <div className="product-thumb">
        <div className="glide__track" data-glide-el="track">
          <ol className="gallery-thumbs glide__slides">
            <Slider {...sliderSettings}>
              {productImages.map((itemImg, index) => (
                <li
                  className="glide__slide glide__slide--active"
                  key={index}
                  onClick={() =>
                    setActiveImg({
                      img: itemImg.img.singleImage,
                      imgIndex: index,
                    })
                  }
                >
                  <img
                    src={itemImg.img.singleImage}
                  />
                </li>
              ))}
            </Slider>
          </ol>
        </div>
      </div>
    )
}

ProductGalleryThumbs.propTypes = {
    setActiveImg: PropTypes.func,
    productImages: PropTypes.array
  };