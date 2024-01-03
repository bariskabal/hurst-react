import Proptypes from "prop-types";
import "./SearchModal.css"

export default function SearchModal({searchModal,setSearchModal}) {
    console.log(searchModal);
  return (
    <div className={`sidebar-search animated ${searchModal ? 'slideInDown' : 'slideOutUp'}`}>
      <div className="table">
        <div className="table-cell">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 p-0">
                <div className="search-form-wrap">
                  <button onClick={() => setSearchModal(!searchModal)} className="close-search">
                    <i className="zmdi zmdi-close"></i>
                  </button>
                  <form action="#">
                    <input type="text" placeholder="Search here..." style={{paddingLeft : '0'}} />
                    <button className="search-button" type="submit">
                      <i className="zmdi zmdi-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SearchModal.propTypes = {
    searchModal: Proptypes.bool,
    setSearchModal: Proptypes.func
}
