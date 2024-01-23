// store/store.js
import { createStore, combineReducers } from 'redux';
import cartReducer, { initialState as cartInitialState } from '../reducers/cartReducer';
import modalReducer from '../reducers/modalReducer';
import authReducer from '../reducers/authReducer';

// rootReducer'ı combineReducers ile oluşturun.
const rootReducer = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
  auth: authReducer
  // Diğer reducer'larınız buraya eklenebilir.
});

// localStorage'dan 'cart' state'ini yüklemek
const persistedCartState = localStorage.getItem('cartState')
  ? JSON.parse(localStorage.getItem('cartState'))
  : cartInitialState; // Eğer localStorage'da bir 'cartState' yoksa boş bir array kullanılır.

// Redux store oluşturulurken initialState olarak persistedCartState kullanılır
const store = createStore(
  rootReducer,
  { cart: persistedCartState } // initialState olarak sadece cart kısmı kullanılır
);

// Store'daki değişiklikleri dinleyip localStorage'a kaydedin
store.subscribe(() => {
  localStorage.setItem('cartState', JSON.stringify(store.getState().cart));
});

export default store;
