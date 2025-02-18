import axios from "axios";

export default class DataHandler {
  static api = axios.create({
    baseURL: "http://localhost:5000/api/v1",
  });

  // static setupInterceptors() {
  //   this.api.interceptors.request.use(
  //     (config) => {
  //       const token = localStorage.getItem("token");

  //       if (token) {
  //         config.headers["Authorization"] = `Bearer ${token}`;
  //       }

  //       return config;
  //     },
  //     (error) => {
  //       // Handle the request error here
  //       return Promise.reject(error);
  //     }
  //   );
  // }

  static async getDatas(url) {
    try {
      const response = await this.api.get(url);
      return response.data;
    } catch (error) {
      console.error("Error getting Datas", error);
      throw error;
    }
  }

  static async postData(url, data) {
    try {
      const response = await this.api.post(url, data);
      return response.data;
    } catch (error) {
      console.error("Error posting Data", error);
      throw error;
    }
  }

  static async updateData(url, data) {
    try {
      const response = await this.api.patch(url, data); // Utilisez patch ici
      return response.data;
    } catch (error) {
      console.error("Error updating data", error);
      throw error;
    }
  }

  static async deleteData(url) {
    try {
      const response = await this.api.delete(url);
      return response.data;
    } catch (error) {
      console.error("Error Deleting data", error);
      throw error;
    }
  }
}

// Call setuptInterceptor once during app initialization
// DataHandler.setupInterceptors();
