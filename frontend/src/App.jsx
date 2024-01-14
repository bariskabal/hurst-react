import { Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import HomePage from "./pages/HomePage";
import "./App.css";
import AuthPage from "./Pages/AuthPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import ShopPage from "./Pages/ShopPage";
import WishlistPage from "./Pages/WishListPage";
import CartPage from "./Pages/CartPage";
import AccountPage from "./Pages/AccountPage";

function App() {
  return (
    <Provider store={store}> {/* Redux store'unu sarmak için Provider kullanımı */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/registration" element={<AuthPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
