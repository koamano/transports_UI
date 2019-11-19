import http from "./httpService";
// import { apiUrl } from "../config.json";

const loginApiEndpoint = "/auth/login";

export function login(username, password) {
  return http.post(loginApiEndpoint, { username, password });
}
