const axios = require('axios');

axios.get('http://localhost:3000/img/read/foto')
  .then(console.log)
  .catch((err) => console.error(err.message, err.stack));
