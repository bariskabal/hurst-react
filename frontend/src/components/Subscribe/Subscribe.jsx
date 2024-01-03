export default function Subscribe() {
  return (
    <div className="subscribe-area pt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="subscribe">
              <form action="#">
                <input type="text" placeholder="Enter your email address" />
                <button
                  className="submit-button submit-btn-2 button-one"
                  data-text="subscribe"
                  type="submit"
                >
                  subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
