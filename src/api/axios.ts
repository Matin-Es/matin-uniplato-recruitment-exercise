import axios from "axios";

export const api = axios.create({
  baseURL: "https://uniplato.staging.uniplato.us/api/v1/",
});

export const getPostsPage = async (pageParam = 1, options = {}) => {
  const response = await api.get(`/mock-data?page=${pageParam}`, options);
  return response;
};
