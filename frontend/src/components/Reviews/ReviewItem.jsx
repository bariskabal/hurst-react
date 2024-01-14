export default function ReviewItem() {
  return (
    <li className="mb-30">
      <div className="pro-reviewer">
        <img src="img/reviewer/1.jpg" alt="" />
      </div>
      <div className="pro-reviewer-comment">
        <div className="fix">
          <div className="floatleft mbl-center">
            <h5 className="text-uppercase mb-0">
              <strong>Gerald Barnes</strong>
            </h5>
            <p className="reply-date">27 Jun, 2021 at 2:30pm</p>
          </div>
          <div className="comment-reply floatright">
            <a href="#">
              <i className="zmdi zmdi-mail-reply"></i>
            </a>
            <a href="#">
              <i className="zmdi zmdi-close"></i>
            </a>
          </div>
        </div>
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          accumsan egestas elese ifend. Phasellus a felis at est bibendum
          feugiat ut eget eni Praesent et messages in con sectetur posuere dolor
          non.
        </p>
      </div>
    </li>
  );
}
