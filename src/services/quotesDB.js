import http from "../http-common";

const getAll = () => {
  return http.get("/quotesDB");
};

// const get = id => {
//   return http.get(`/quotesDB/${id}`);
// };

// const create = data => {
//   return http.post("/quotesDB", data);
// };

// const update = (id, data) => {
//   return http.put(`/quotesDB/${id}`, data);
// };

// const remove = id => {
//   return http.delete(`/quotesDB/${id}`);
// };

// const removeAll = () => {
//   return http.delete(`/quotesDB`);
// };

// const findByTitle = title => {
//   return http.get(`/quotesDB?title=${title}`);
// };

export default {
  getAll,
  // get,
  // create,
  // update,
  // remove,
  // removeAll,
  // findByTitle
};