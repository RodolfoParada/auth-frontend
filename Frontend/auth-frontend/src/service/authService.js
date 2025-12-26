import api from "../api/axios";

export const loginRequest = (data) =>
  api.post("/auth/login", data);

export const registerRequest = (data) =>
  api.post("/auth/register", data);

export const logoutRequest = (refreshToken) =>
  api.post("/auth/logout", { token: refreshToken });
