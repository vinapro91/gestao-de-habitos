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

const genericGet = (url) => {
  const headers = getHeaders();

  return api
    .get(url, headers)
    .then((response) => response)
    .catch((error) => error.response);
};

const genericDelete = (url) => {
  const headers = getHeaders();

  return api
    .delete(url, headers)
    .then((response) => response)
    .catch((error) => error.response);
};

const genericPatch = (url, data) => {
  const headers = getHeaders();

  return api
    .patch(url, data, headers)
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

export const getUserSubscriptions = () => {
  const url = "/groups/subscriptions/";

  return genericGet(url);
};

export const unsubscribeFromAGroup = (id) => {
  const url = `/groups/${id}/unsubscribe/`;

  return genericDelete(url);
};

export const createGroup = (data) => {
  const url = "/groups/";

  return genericPost(url, data);
};

export const getGroup = (id) => {
  const url = `/groups/${id}/`;

  return genericGet(url);
};

export const getHabits = () => {
  const url = `/habits/personal/`;

  return genericGet(url);
};

export const postHabits = (data) => {
  const url = `/habits/`;

  return genericPost(url, data);
};

export const getActivities = (data) => {
  const url = `/activities/?group=${data}&page=1`;

  return genericGet(url);
};

export const deletHabit = (id) => {
  const url = `/habits/${id}/`;

  return genericDelete(url);
};

export const updateGroupCategory = (id, data) => {
  const url = `/groups/${id}/`;

  return genericPatch(url, data);
};

export const addGoal = (data) => {
  const url = "/goals/";

  return genericPost(url, data);
};

export const addActivity = (data) => {
  const url = "/activities/";

  return genericPost(url, data);
};

export default api;
