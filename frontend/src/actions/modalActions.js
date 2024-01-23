const TOGGLE_SEARCH_MODAL = "TOGGLE_SEARCH_MODAL";
const OPEN_LOGIN_MODAL = "OPEN_LOGIN_MODAL";
const CLOSE_LOGIN_MODAL = "CLOSE_LOGIN_MODAL";
const OPEN_MODAL_WITH_PRODUCT = "OPEN_MODAL_WITH_PRODUCT";
const CLOSE_MODAL_WITH_PRODUCT = "CLOSE_MODAL_WITH_PRODUCT";
// Action Creators
export const toggleSearchModal = () => ({
  type: TOGGLE_SEARCH_MODAL,
});

export const openLoginModal = () => ({
  type: OPEN_LOGIN_MODAL,
});

export const closeLoginModal = () => ({
  type: CLOSE_LOGIN_MODAL,
});

export const openModalWithProduct = (product) => {
  return {
    type: OPEN_MODAL_WITH_PRODUCT,
    payload: product,
  };
};

export const closeProductModal = () => ({
  type: CLOSE_MODAL_WITH_PRODUCT,
});
