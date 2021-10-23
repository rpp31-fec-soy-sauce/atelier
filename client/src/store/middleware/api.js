import axios from "axios";
import * as actions from '../apiActions';

const port = 3000;
const baseURL = `http://localhost:${port}/api/`;

const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onSuccess } = action.payload;

  axios.request({ method, baseURL, url, data })
    .then(response => {
      console.log('api response:', response.data);
      dispatch({ type: onSuccess, payload: response.data });
    })
    .catch(err => console.log('api err:', err));
};

export default apiMiddleware;