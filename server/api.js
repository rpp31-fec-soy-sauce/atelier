const axios = require('axios');
const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/';
// const headers = { Authorization: require('../apiToken') };
require('dotenv').config();
const headers = { Authorization: process.env.apiToken };
// console.log(headers)

const makeApiRequest = (method, url, data) =>
  axios.request({
    headers,
    method,
    baseURL,
    url,
    data
  });

module.exports = makeApiRequest;
