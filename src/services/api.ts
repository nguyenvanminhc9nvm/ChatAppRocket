import axios from 'axios';

const api = axios.create({
  baseURL: 'https://discussion.miichisoft.net/api/v1',
  responseType: 'json',
  withCredentials: true,
});

export {api};
