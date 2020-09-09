const axios = require('axios');

axios
  .get('http://localhost:3000/text/read/0')
  .then(({ data }) => console.log(data))
  .catch((err) => console.error(err.message, err.stack));
