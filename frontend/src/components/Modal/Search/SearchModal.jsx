import "./SearchModal.css"
import { useSelector,useDispatch } from 'react-redux';
import { toggleSearchModal } from "../../../actions/modalActions";

export default function SearchModal() {
  const searchModal = useSelector(state => state.modal.searchModal);
  const dispatch = useDispatch();

  return (
    <div className={`sidebar-search animated ${searchModal ? 'slideInDown' : 'slideOutUp'}`}>
      <div className="table">
        <div className="table-cell">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 p-0">
                <div className="search-form-wrap">
                  <button onClick={() => dispatch(toggleSearchModal())} className="close-search">
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

