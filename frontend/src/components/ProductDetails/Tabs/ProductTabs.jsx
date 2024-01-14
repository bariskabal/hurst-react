import Reviews from "../../Reviews/Reviews";

export default function ProductTabs() {
  return (
    <div className="single-pro-tab">
      <div className="row">
        <div className="col-md-3">
          <div className="single-pro-tab-menu">
            <ul className="nav d-block">
              <li>
                <a href="#description" data-bs-toggle="tab">
                  Description
                </a>
              </li>
              <li>
                <a className="active" href="#reviews" data-bs-toggle="tab">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#information" data-bs-toggle="tab">
                  Information
                </a>
              </li>
              <li>
                <a href="#tags" data-bs-toggle="tab">
                  Tags
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <div className="tab-content">
            <div className="tab-pane" id="description">
              <div className="pro-tab-info pro-description">
                <h3 className="tab-title title-border mb-30">
                  dummy Product name
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer accumsan egestas elese ifend. Phasellus a felis at est
                  bibendum feugiat ut eget eni Praesent et messages in con
                  sectetur posuere dolor non.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer accumsan egestas elese ifend. Phasellus a felis at est
                  bibendum feugiat ut eget eni Praesent et messages in con
                  sectetur posuere dolor non.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer accumsan egestas elese ifend. Phasellus a felis at est
                  bibendum feugiat ut eget eni Praesent et messages in con
                  sectetur posuere dolor non.
                </p>
              </div>
            </div>
            <Reviews />
            <div className="tab-pane" id="information">
              <div className="pro-tab-info pro-information">
                <h3 className="tab-title title-border mb-30">
                  Product information
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer accumsan egestas elese ifend. Phasellus a felis at est
                  bibendum feugiat ut eget eni Praesent et messages in con
                  sectetur posuere dolor non.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer accumsan egestas elese ifend. Phasellus a felis at est
                  bibendum feugiat ut eget eni Praesent et messages in con
                  sectetur posuere dolor non.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer accumsan egestas elese ifend. Phasellus a felis at est
                  bibendum feugiat ut eget eni Praesent et messages in con
                  sectetur posuere dolor non.
                </p>
              </div>
            </div>
            <div className="tab-pane" id="tags">
              <div className="pro-tab-info pro-information">
                <h3 className="tab-title title-border mb-30">tags</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer accumsan egestas elese ifend. Phasellus a felis at est
                  bibendum feugiat ut eget eni Praesent et messages in con
                  sectetur posuere dolor non.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer accumsan egestas elese ifend. Phasellus a felis at est
                  bibendum feugiat ut eget eni Praesent et messages in con
                  sectetur posuere dolor non.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer accumsan egestas elese ifend. Phasellus a felis at est
                  bibendum feugiat ut eget eni Praesent et messages in con
                  sectetur posuere dolor non.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
