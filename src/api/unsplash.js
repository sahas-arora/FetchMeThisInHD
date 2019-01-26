

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID b6c9d3fff7dd5decc9a41be76de370dc6d22b93a6214e95979aa4c2ffdf9362a'
  }
});
