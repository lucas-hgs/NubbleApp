import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer Mw.ZUGrX19L6fEfbMxmzGeG_Wl6m2IEOHx0PZUJN5OEjO1QaLfgCIU9EWE2GXKQ',
  },
});
