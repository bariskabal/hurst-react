import "./ProductGallery.css";
import PropTypes from "prop-types";

export default function ProductGallery({ activeImg,setIsOpen }) {
  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={activeImg.img} id="single-image" style={{cursor:"auto"}}/>
        <span onClick={() => setIsOpen(true)} className="view-full-screen"><i className="zmdi zmdi-zoom-in"></i></span>
      </div>
    </div>
  );
}

ProductGallery.propTypes = {
  activeImg: PropTypes.object,
  setIsOpen: PropTypes.func
};
