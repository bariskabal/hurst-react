import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from "jwt-decode";
import { logoutUser } from '../actions/authActions';

const TokenCheck = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        navigate("/");
        dispatch(logoutUser());
      }
    }
  }, [token, navigate, dispatch]);

  return null;
};

export default TokenCheck;
