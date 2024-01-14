// actions/cartActions.js
export const addToCart = (product, quantity) => {
    return {
      type: 'ADD_TO_CART',
      payload: { product, quantity }
    };
  };
  
  export const removeFromCart = (product) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: product,
    };
  };

  export const removeFromAll = (product) => {
    return {
      type: 'REMOVE_FROM_ALL',
      payload: product,
    };
  };
  
  