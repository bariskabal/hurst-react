import axios from "axios";
import { message } from "antd";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

class ProductService {
    async getFeaturedProducts() {
        try {
          const response = await axios.get(`${apiUrl}/products/getFeaturedProducts`);
          return { success: true, data: response.data };
        } catch (error) {
          message.error("")
          const errorMessage = error.response && error.response.data.error 
                               ? error.response.data.error
                               : "Bir hata oluştu.";
          
          // Kullanıcıya gösterilecek özel bir hata mesajı döndür
          return { success: false, message: errorMessage };
        }
    }
    async getMostLikedProducts() {
        try {
          const response = await axios.get(`${apiUrl}/products/getMostLikedProducts`);
          return { success: true, data: response.data };
        } catch (error) {
          message.error("")
          const errorMessage = error.response && error.response.data.error 
                               ? error.response.data.error
                               : "Bir hata oluştu.";
          
          // Kullanıcıya gösterilecek özel bir hata mesajı döndür
          return { success: false, message: errorMessage };
        }
    }
    async getBestSellerProducts() {
        try {
          const response = await axios.get(`${apiUrl}/products/getBestSellerProducts`);
          return { success: true, data: response.data };
        } catch (error) {
          message.error("")
          const errorMessage = error.response && error.response.data.error 
                               ? error.response.data.error
                               : "Bir hata oluştu.";
          
          // Kullanıcıya gösterilecek özel bir hata mesajı döndür
          return { success: false, message: errorMessage };
        }
    }
    async getDiscountsProducts() {
        try {
          const response = await axios.get(`${apiUrl}/products/getDiscountsProducts`);
          return { success: true, data: response.data };
        } catch (error) {
          message.error("")
          const errorMessage = error.response && error.response.data.error 
                               ? error.response.data.error
                               : "Bir hata oluştu.";
          
          // Kullanıcıya gösterilecek özel bir hata mesajı döndür
          return { success: false, message: errorMessage };
        }
    }
    async getNewArrivals() {
        try {
          const response = await axios.get(`${apiUrl}/products/getNewArrivals`);
          return { success: true, data: response.data };
        } catch (error) {
          message.error("")
          const errorMessage = error.response && error.response.data.error 
                               ? error.response.data.error
                               : "Bir hata oluştu.";
          
          // Kullanıcıya gösterilecek özel bir hata mesajı döndür
          return { success: false, message: errorMessage };
        }
    }
}

export default new ProductService();