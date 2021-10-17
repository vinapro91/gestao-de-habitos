import axios from "axios";

const api = axios.create({
  baseURL: "https://kabit-api.herokuapp.com",
  responseType: "json",
});

const getHeaders = () => {
  const token = JSON.parse(localStorage.getItem("@Habits:Token")) || "";
  const headers = !!token
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : "";

  return headers;
};

const genericPost = (url, data) => {
  const headers = getHeaders();

  return api
    .post(url, data, headers)
    .then((response) => response)
    .catch((error) => error.response);
};

export const signUpUser = (user) => {
  const url = "/users/";

  return genericPost(url, user);
};

export const subscribeToAGroup = (id) => {
  const url = `/groups/${id}/subscribe/`;

  return genericPost(url, id);
};

export default api;
