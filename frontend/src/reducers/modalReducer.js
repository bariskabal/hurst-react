const modalInitialState = {
  searchModal: false,
  loginModal: false,
  productModal: false,
  product: null,
  // ... diğer modal durumları
};

function modalReducer(state = modalInitialState, action) {
  switch (action.type) {
    case "TOGGLE_SEARCH_MODAL":
      return {
        ...state,
        searchModal: !state.searchModal,
      };
    case "OPEN_LOGIN_MODAL":
      return {
        ...state,
        loginModal: true,
      };
    case "CLOSE_LOGIN_MODAL":
      return {
        ...state,
        loginModal: false,
      };
    case "OPEN_MODAL_WITH_PRODUCT":
      return {
        ...state,
        productModal: true,
        product: action.payload,
      };
      case "CLOSE_MODAL_WITH_PRODUCT":
      return {
        ...state,
        productModal: false,
      };
    // ... diğer case'ler
    default:
      return state;
  }
}

export default modalReducer;
