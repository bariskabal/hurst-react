import LoginModal from "../../Modal/Auth/LoginModal";
import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchModal } from "../../../actions/modalActions";
import { openLoginModal, closeLoginModal } from "../../../actions/modalActions";
import { logoutUser } from "../../../actions/authActions";
import { message, Popover } from "antd";

export default function RightBar() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
    message.success("Çıkış işlemi başarılı");
  };

  const content = (
    <div className="d-flex flex-column">
      <p>Çıkış yapmak istediğinize emin misiniz?</p>
      <button className="btn bg-primary text-white" onClick={handleLogout}>Çıkış yap</button>
    </div>
  );

  return (
    <div className="sidebar-account d-none d-md-block">
      <div className="table">
        <div className="table-cell">
          <ul>
            <li>
              <a
                onClick={() => dispatch(toggleSearchModal())}
                className="search-open"
                href="#"
                title="Search"
              >
                <i className="zmdi zmdi-search"></i>
              </a>
            </li>
            {token ? (
              <li>
                <Popover content={content} placement="left" trigger="click">
                  <Link>
                    <IoLogOut />
                  </Link>
                </Popover>
              </li>
            ) : (
              <li
                onMouseEnter={() => openLoginModal()}
                onMouseLeave={() => closeLoginModal()}
              >
                <Link to={"/auth/registration"}>
                  <i className="zmdi zmdi-lock"></i>
                </Link>
                <LoginModal />
              </li>
            )}
            {token && (
              <li>
                <Link to={"/account"} title="My-Account">
                  <i className="zmdi zmdi-account"></i>
                </Link>
              </li>
            )}
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
