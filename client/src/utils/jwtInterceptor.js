import axios from "axios";

function jwtInterceptor() {
  axios.interceptors.request.use((req) => {
    const userToken = window.localStorage.getItem("token");
    const adminToken = window.localStorage.getItem("admin-token");

    if (userToken) {
      req.headers.Authorization = `Bearer ${userToken}`;
    } else if (adminToken) {
      req.headers.Authorization = `Bearer ${adminToken}`;
    }

    return req;
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("admin-token");
        window.location.replace("/login");
      }
      return Promise.reject(error);
    }
  );
}

export default jwtInterceptor;
