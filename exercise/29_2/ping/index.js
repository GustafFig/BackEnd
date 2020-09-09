const axios = require('axios');

axios.get('http://localhost:3000/ping')
	.then((response) => {
		console.log(response.data);
		console.log(response.status);
	})
	.catch((err) => console.error(err));
