import Proptypes from "prop-types";
import LoginModal from "../../Modal/Auth/LoginModal";

export default function RightBar({
  setSearchModal,
  searchModal,
  setLoginModal,
  loginModal,
}) {

  return (
    <div className="sidebar-account d-none d-md-block">
      <div className="table">
        <div className="table-cell">
          <ul>
            <li>
              <a
                onClick={() => setSearchModal(!searchModal)}
                className="search-open"
                href="#"
                title="Search"
              >
                <i className="zmdi zmdi-search"></i>
              </a>
            </li>
            <li
              onMouseEnter={() => setLoginModal(!loginModal)}
              onMouseLeave={() => setLoginModal(!loginModal)}
            >
              <a href="#" title="Login">
                <i className="zmdi zmdi-lock"></i>
              </a>
              <LoginModal loginModal={loginModal}/>
            </li>
            <li>
              <a href="my-account.html" title="My-Account">
                <i className="zmdi zmdi-account"></i>
              </a>
            </li>
            <li>
              <a href="wishlist.html" title="Wishlist">
                <i className="zmdi zmdi-favorite"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

RightBar.propTypes = {
  setSearchModal: Proptypes.func,
  searchModal: Proptypes.bool,
  setLoginModal: Proptypes.func,
  loginModal: Proptypes.bool,
};
