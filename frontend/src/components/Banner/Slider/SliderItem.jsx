import Proptypes from "prop-types";
import { Link } from "react-router-dom";

export default function SliderItem({ imageSrc }) {
  return (
    <div className="slider-item fade show">
      <div className="slider-image">
        <img
          src={imageSrc}
          style={{ width: "100%" }}
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="container">
        <p className="slider-title">Welcome to Our</p>
        <h2 className="slider-heading">FURNITURE</h2>
        <h3 className="slider-heading-title">GALLERY 2021</h3>
        <p className="slider-description">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable
        </p>
        <Link to={"/shop"} className="btn btn-lg" data-content="Shop Now">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

SliderItem.propTypes = {
  imageSrc: Proptypes.string,
};
