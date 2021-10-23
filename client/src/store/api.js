import axios from "axios"

const port = 3000;
const baseURL = `http://localhost:${port}/api/`;

const makeApiCall = (method, url, data) => axios.request({ baseURL, url, method, data });

export default makeApiCall;