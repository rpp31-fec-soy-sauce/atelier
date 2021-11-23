import axios from "axios"

const port = 3000;
const baseURL = `http://ec2-3-21-186-139.us-east-2.compute.amazonaws.com:${port}/api/`;

const makeApiCall = (method, url, data) => axios.request({ baseURL, url, method, data });

export default makeApiCall;