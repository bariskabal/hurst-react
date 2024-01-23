import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import HomePage from "./pages/HomePage";
import "./App.css";
import AuthPage from "./Pages/AuthPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import ShopPage from "./Pages/ShopPage";
import WishlistPage from "./Pages/WishListPage";
import CartPage from "./Pages/CartPage";
import AccountPage from "./Pages/AccountPage";
import PrivateRoute from "./routes/PrivateRoute";
import DashboardPage from "./Pages/Admin/DashboardPage";
import TokenCheck from "./routes/TokenCheck";
import CreateProduct from "./Pages/Admin/Product/CreateProduct";

function App() {
  return (
    <Provider store={store}>
      <TokenCheck />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/registration" element={<AuthPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/account"
            element={
              <PrivateRoute roles={["user", "admin"]} component={AccountPage} />
            }
          />
          <Route
            path="/wishlist"
            element={
              <PrivateRoute roles={["user"]} component={WishlistPage} />
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute roles={["admin"]} component={DashboardPage} />
            }
          />
          <Route
            path="/admin/product/create"
            element={
              <PrivateRoute roles={["admin"]} component={CreateProduct} />
            }
          />
        </Routes>
    </Provider>
  );
}

export default App;
