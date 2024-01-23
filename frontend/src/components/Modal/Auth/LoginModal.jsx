import { useSelector, useDispatch } from "react-redux";
import AuthService from "../../../services/authService";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../../actions/authActions';
import { useFormik } from 'formik';
import { loginSchema } from "../../../schemas/loginSchema";

export default function LoginModal() {
  const loginModal = useSelector((state) => state.modal.loginModal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      usernameOrEmail: '',
      password: '',
    },
    validationSchema:loginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const result = await AuthService.handleLogin(values);
        if (result.success) {
          message.success(result.message);
          dispatch(loginUser(localStorage.getItem("token")));
          const roles = AuthService.currentUserRole();
          if (roles === "admin") {
            navigate("/admin");
          } else {
            navigate("/");
          }
        } else {
          message.error(result.message);
        }
      } catch (error) {
        message.error('Login işlemi sırasında bir hata meydana geldi.');
      }
      setSubmitting(false);
    },
  });

  return (
    <div className={`customer-login text-left ${loginModal ? "ok" : "no"}`}>
      <form onSubmit={formik.handleSubmit}>
        <h4 className="title-1 title-border text-uppercase mb-30">
          Registered customers
        </h4>
        <p className="text-gray">
          If you have an account with us, Please login!
        </p>
        <div className="d-flex flex-column mb-2" style={{rowGap:"10px"}}>
          <input
            type="text"
            className="mb-0"
            name="usernameOrEmail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.usernameOrEmail}
            placeholder="Email here..."
          />
          {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail && (
            <p style={{textAlign:"left",marginLeft:"5px",color:"#c87065"}}>{formik.errors.usernameOrEmail}</p>
          )}
        </div>
        <div className="d-flex flex-column mb-2" style={{rowGap:"10px"}}>
          <input
            type="password"
            name="password"
            className="mb-0"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password && (
            <p style={{textAlign:"left",marginLeft:"5px",color:"#c87065"}}>{formik.errors.password}</p>
          )}
        </div>
        <p>
          <a className="text-gray" href="#">
            Forget your password?
          </a>
        </p>
        <button
          className="button-one submit-button mt-15"
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          login
        </button>
      </form>
    </div>
  );
}
