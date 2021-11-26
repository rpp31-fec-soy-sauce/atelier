const axios = require('axios');
const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/';
const headers = { Authorization: require('../apiToken') };

const makeApiRequest = (method, url, data) =>
  axios.request({
    headers,
    method,
    baseURL,
    url,
    data
  });

module.exports = makeApiRequest;
