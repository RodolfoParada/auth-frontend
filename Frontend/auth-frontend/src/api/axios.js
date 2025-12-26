import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        localStorage.clear();
        window.location.href = "/login";
        return;
      }

      const res = await axios.post(
        "http://localhost:4000/api/auth/refresh",
        { token: refreshToken }
      );

      localStorage.setItem("token", res.data.accessToken);
      original.headers.Authorization = `Bearer ${res.data.accessToken}`;

      return axios(original);
    }

    return Promise.reject(error);
  }
);

export default api;
