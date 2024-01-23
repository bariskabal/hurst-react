import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { message } from "antd";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

class AuthService {
  isLoggedIn() {
    return !!localStorage.getItem("token");
  }

  // Mevcut kullanıcının rolünü döndürür
  currentUserRole() {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
      const decoded = jwtDecode(token);
      return decoded.user.roles;
    } catch (error) {
      return null;
    }
  }

  async handleLogin(formData) {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, formData);
      // Başarılı yanıt işleme
      const { accessToken } = response.data;
      localStorage.setItem("token", JSON.stringify(accessToken));
      return { success: true, message: "Giriş başarılı." };
    } catch (error) {
      message.error("")
      const errorMessage = error.response && error.response.data.error 
                           ? error.response.data.error
                           : "Giriş işlemi sırasında bir hata oluştu.";
      
      // Kullanıcıya gösterilecek özel bir hata mesajı döndür
      return { success: false, message: errorMessage };
    }
  }
  async handleRegister(formData) {
    try {
      await axios.post(`${apiUrl}/auth/register`, formData);
      // Başarılı yanıt işleme
      message.success("")
      return { success: true, message: "Kayıt işlemi başarılı." };
    } catch (error) {
      message.error("")
      const errorMessage = error.response && error.response.data.error 
                           ? error.response.data.error
                           : "Kayıt işlemi sırasında bir hata oluştu.";
      
      // Kullanıcıya gösterilecek özel bir hata mesajı döndür
      return { success: false, message: errorMessage };
    }
  }
}

export default new AuthService();
