import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer NA.WnipY6hkfN7l-pYFoXneljb73TcDwc-_5Pj7oI0iDvF_VyRtQSkgaljIM3d6',
  },
});
