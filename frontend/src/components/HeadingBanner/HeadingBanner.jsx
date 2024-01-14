import { Link } from "react-router-dom";
import Proptypes from "prop-types"

export default function HeadingBanner({pageName}) {
  return (
    <div className="heading-banner-area overlay-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-banner">
              <div className="heading-banner-title">
                <h2>{pageName}</h2>
              </div>
              <div className="breadcumbs pb-15">
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>{pageName}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HeadingBanner.propTypes = {
    pageName: Proptypes.string
  };
  