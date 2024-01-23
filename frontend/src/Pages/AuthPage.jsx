import Auth from "../components/Auth/Auth";
import { Navigate } from 'react-router-dom';
import AuthService from '../services/authService';

export default function AuthPage() {
    const isLoggedIn = AuthService.isLoggedIn();

    if (isLoggedIn) {
        return <Navigate to="/" />;
      }
    return (
        <Auth />
    )
}