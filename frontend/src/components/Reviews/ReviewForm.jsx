export default function ReviewForm() {
    return(
        <div className="leave-review">
          <h3 className="tab-title title-border mb-30">Leave your reviw</h3>
          <div className="your-rating mb-30">
            <p className="mb-10">
              <strong>Your Rating</strong>
            </p>
            <span>
              <a href="#">
                <i className="zmdi zmdi-star-outline"></i>
              </a>
            </span>
            <span className="separator">|</span>
            <span>
              <a href="#">
                <i className="zmdi zmdi-star-outline"></i>
              </a>
              <a href="#">
                <i className="zmdi zmdi-star-outline"></i>
              </a>
            </span>
            <span className="separator">|</span>
            <span>
              <a href="#">
                <i className="zmdi zmdi-star-outline"></i>
              </a>
              <a href="#">
                <i className="zmdi zmdi-star-outline"></i>
              </a>
              <a href="#">
                <i className="zmdi zmdi-star-outline"></i>
              </a>
            </span>
            <span className="separator">|</span>
            <span>
              <a href="#">
                <i className="zmdi zmdi-star-outline"></i>
              </a>
              <a href="#">
                <i className="zmdi zmdi-star-outline"></i>
              </a>
              <a href="#">
                <i className="zmdi zmdi-star-outline"></i>
              </a>
              <a href="#">
                <i className="zmdi zmdi-star-outline"></i>
              </a>
            </span>
            <span className="separator">|</span>
            <span>
              <a href="#">
                <i className="zmdi zmdi-star-outline"></i>
              </a>
              <a href="#">
                <i className="zmdi zmdi-star-outline"></i>
              </a>
              <a href="#">
                <i className="zmdi zmdi-star-outline"></i>
              </a>
              <a href="#">
                <i className="zmdi zmdi-star-outline"></i>
              </a>
              <a href="#">
                <i className="zmdi zmdi-star-outline"></i>
              </a>
            </span>
          </div>
          <div className="reply-box">
            <form action="#">
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Your name here..."
                    name="name"
                  />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Subject..." name="name" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <textarea
                    className="custom-textarea"
                    name="message"
                    placeholder="Your review here..."
                  ></textarea>
                  <button
                    type="submit"
                    data-text="submit review"
                    className="button-one submit-button mt-20"
                  >
                    submit review
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
    )
}