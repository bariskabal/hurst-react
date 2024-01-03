import Proptypes from "prop-types";

export default function LoginModal({ loginModal }) {
  return (
    <div className={`customer-login text-left ${loginModal ? 'ok' : 'no'}`}>
      <form action="#">
        <h4 className="title-1 title-border text-uppercase mb-30">
          Registered customers
        </h4>
        <p className="text-gray">
          If you have an account with us, Please login!
        </p>
        <input type="text" name="email" placeholder="Email here..." />
        <input type="password" placeholder="Password" />
        <p>
          <a className="text-gray" href="#">
            Forget your password?
          </a>
        </p>
        <button
          className="button-one submit-button mt-15"
          data-text="login"
          type="submit"
        >
          login
        </button>
      </form>
    </div>
  );
}

LoginModal.propTypes = {
    loginModal: Proptypes.bool
}
