import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com/',
});

export const api = {
  getBaseInfo(username) {
    return instance.get(`users/${username}`).then(res => res.data)
  },
  getLanguages(username) {
    return instance.get(`users/${username}/repos`).then(res => res.data)
  }
}
