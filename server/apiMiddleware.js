const axios = require('axios');
const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/';
const headers = { Authorization: require('../apiToken') };

// require('dotenv').config();
// const headers = { Authorization: process.env.apiToken };

const router = (req, res, next) => {
  if (!req.url.startsWith('/api')) return next();
  const url = req.url.split('/').slice(2).join('/');

  axios.request({
    headers,
    method: req.method,
    baseURL,
    url,
    data: req.body
  })
    .then(response => res.send(response.data))
    .catch(err => {
      console.log('Err', err);
      res.status(500).send(err);
    });
};

module.exports = router;