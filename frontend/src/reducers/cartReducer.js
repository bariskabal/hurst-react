// reducers/cartReducer.js
export const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  let existingItem; // switch bloğu dışında tanımlanmalı
  let updatedItems; // switch bloğu dışında tanımlanmalı
  let itemIdToRemove;
  switch (action.type) {
    case "ADD_TO_CART":
      existingItem = state.items.find(
        (item) => item.id === action.payload.product.id
      );
      if (existingItem) {
        // Eğer ürün zaten ekliyse, miktarı gelen payload miktarı kadar artırın.
        const updatedQuantity =
          existingItem.quantity + (action.payload.quantity || 1);
        const changedQuantityItems = state.items.map((item) =>
          item.id === action.payload.product.id
            ? { ...item, quantity: updatedQuantity }
            : item
        );
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.product.id
              ? { ...item, quantity: updatedQuantity }
              : item
          ),
          total: changedQuantityItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          ),
        };
      } else {
        // Eğer ürün eklenmemişse, yeni bir ürün olarak ekleyin ve miktarı ayarlayın.
        const newItemQuantity = action.payload.quantity || 1;
        const newItem = {
          ...action.payload.product,
          quantity: newItemQuantity,
        };
        const itemTotals = [...state.items, newItem];
        return {
          ...state,
          items: [...state.items, newItem],
          total: itemTotals.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          ),
        };
      }
    case "REMOVE_FROM_CART":
      // Ürünü tamamen kaldırmak veya miktarını azaltmak için işlem yapın.
      itemIdToRemove = action.payload.id;
      updatedItems = state.items
        .map((item) => {
          if (item.id === itemIdToRemove) {
            return {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 0,
            };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);

      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      };
    case "REMOVE_FROM_ALL":
      itemIdToRemove = action.payload.id;
      updatedItems = state.items.filter((item) => item.id !== itemIdToRemove);

      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      };

    default:
    return state;
  }
};

export default cartReducer;
