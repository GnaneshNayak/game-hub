import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'b710ee6b55624f5baa5e7c706c9d8844',
  },
});
