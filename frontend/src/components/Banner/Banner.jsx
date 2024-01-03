import RightBar from "./SidebarAccount/RightBar";
import Slider from "./Slider/Slider";
import Proptypes from "prop-types";

export default function Banner({
  setSearchModal,
  searchModal,
  setLoginModal,
  loginModal,
}) {
  return (
    <section className="slider-banner-area clearfix">
      <Slider />
      <RightBar
        searchModal={searchModal}
        setSearchModal={setSearchModal}
        loginModal={loginModal}
        setLoginModal={setLoginModal}
      />
    </section>
  );
}

Banner.propTypes = {
  setSearchModal: Proptypes.func,
  searchModal: Proptypes.bool,
  setLoginModal: Proptypes.func,
  loginModal: Proptypes.bool,
};
