import api from "./api";
export const getZingContent = () => api.get(api.url.zingHome);
export const getDetailContent = (id) => api.get(`${api.url.zingHome}/${id}`);
export const createContent = (payload) => api.post(api.url.zingHome, payload);
export const updateContent = (params) => {
  // console.log(params);
  return api.put(`${api.url.zingHome}/${params.id}`, params);
};
export const deleteContent = (id) => api.delete(`${api.url.zingHome}/${id}`);

// book api services
export const getBook = () => api.get(api.url.Book);
