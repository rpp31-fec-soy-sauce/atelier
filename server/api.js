const axios = require('axios');
// require('dotenv').config();
const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/';
require('dotenv').config();
// const { API_TOKEN } = require('../apiToken')
const headers = { Authorization: process.env.API_TOKEN };

const makeApiRequest = (method, url, data) =>
  axios.request({
    headers,
    method,
    baseURL,
    url,
    data
  });

module.exports = makeApiRequest;
