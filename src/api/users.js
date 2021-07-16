import baseApi from './config';

export default {
  getUsers: async () => (await baseApi.get('users')).data,
  getUser: async (id) => (await baseApi.get(`users/${id}`)).data,
  getUserArticles: async (id) => (await baseApi.get(`users/${id}/articles`)).data,
  getData: async (url) => (await baseApi.get(url)).data,
};
