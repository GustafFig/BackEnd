const axios = require('axios');

axios.get('http://localhost:3000/uploads/')
  .then(({ data }) => console.log(data))
  .catch(({ response }) => console.error(response.data, response.status));
