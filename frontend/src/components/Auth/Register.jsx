import AuthService from "../../services/authService";
import { message } from "antd";
import { useFormik } from "formik";
import { registerSchema } from "../../schemas/registerSchema";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      // eslint-disable-next-line no-unused-vars
      const { confirmPassword, ...submitValues } = values;
      try {
        const result = await AuthService.handleRegister(submitValues);
        if (result.success) {
          message.success(result.message);
          resetForm();
        } else {
          message.error(result.message);
        }
      } catch (error) {
        message.error("Login işlemi sırasında bir hata meydana geldi.");
      }
      setSubmitting(false);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="col-lg-6">
      <div className="customer-login text-left">
        <h4 className="title-1 title-border text-uppercase mb-30">
          new customers
        </h4>
        <p className="text-gray">
          If you have an account with us, Please login!
        </p>
        <div className="d-flex flex-column mb-2" style={{ rowGap: "10px" }}>
          <input
            type="text"
            className="mb-0"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            placeholder="Username here..."
          />
          {formik.touched.username && formik.errors.username && (
            <p
              className="mb-0"
              style={{ textAlign: "left", marginLeft: "5px", color: "#c87065" }}
            >
              {formik.errors.username}
            </p>
          )}
        </div>
        <div className="d-flex flex-column mb-2" style={{ rowGap: "10px" }}>
          <input
            type="text"
            className="mb-0"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Name here..."
          />
          {formik.touched.name && formik.errors.name && (
            <p
              className="mb-0"
              style={{ textAlign: "left", marginLeft: "5px", color: "#c87065" }}
            >
              {formik.errors.name}
            </p>
          )}
        </div>
        <div className="d-flex flex-column mb-2" style={{ rowGap: "10px" }}>
          <input
            type="text"
            className="mb-0"
            name="surname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.surname}
            placeholder="Surname here..."
          />
          {formik.touched.surname && formik.errors.surname && (
            <p
              className="mb-0"
              style={{ textAlign: "left", marginLeft: "5px", color: "#c87065" }}
            >
              {formik.errors.surname}
            </p>
          )}
        </div>
        <div className="d-flex flex-column mb-2" style={{ rowGap: "10px" }}>
          <input
            type="text"
            className="mb-0"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Email here..."
          />
          {formik.touched.email && formik.errors.email && (
            <p
              className="mb-0"
              style={{ textAlign: "left", marginLeft: "5px", color: "#c87065" }}
            >
              {formik.errors.email}
            </p>
          )}
        </div>
        <div className="d-flex flex-column mb-2" style={{ rowGap: "10px" }}>
          <input
            type="password"
            className="mb-0"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password here..."
          />
          {formik.touched.password && formik.errors.password && (
            <p
              className="mb-0"
              style={{ textAlign: "left", marginLeft: "5px", color: "#c87065" }}
            >
              {formik.errors.password}
            </p>
          )}
        </div>
        <div className="d-flex flex-column mb-2" style={{ rowGap: "10px" }}>
          <input
            type="password"
            className="mb-0"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            placeholder="Confirm Password here..."
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p
              className="mb-0"
              style={{ textAlign: "left", marginLeft: "5px", color: "#c87065" }}
            >
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>
        <p className="mb-0">
          <input type="checkbox" id="newsletter" name="newsletter" />
          <label htmlFor="newsletter">
            <span>Sign up for our newsletter!</span>
          </label>
        </p>
        <button
          type="submit"
          className="button-two submit-button mt-15"
          disabled={!formik.isValid || formik.isSubmitting}
        >
          register
        </button>
      </div>
    </form>
  );
}
