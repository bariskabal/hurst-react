import Proptypes from "prop-types";
import LoginModal from "../../Modal/Auth/LoginModal";
import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";

export default function RightBar({
  setSearchModal,
  searchModal,
  setLoginModal,
  loginModal,
}) {

  const user = localStorage?.getItem("token");

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
            {user ? <li><Link to={"/auth/registration"}>
              <IoLogOut />
              </Link></li>:<li
              onMouseEnter={() => setLoginModal(!loginModal)}
              onMouseLeave={() => setLoginModal(!loginModal)}
            >
              <Link to={"/auth/registration"}>
                <i className="zmdi zmdi-lock"></i>
              </Link>
              <LoginModal loginModal={loginModal}/>
            </li>}
            {user && <li>
              <Link to={'/account'} title="My-Account">
                <i className="zmdi zmdi-account"></i>
              </Link>
            </li>}
            <li>
              <Link to={"/wishlist"} title="Wishlist">
                <i className="zmdi zmdi-favorite"></i>
              </Link>
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
