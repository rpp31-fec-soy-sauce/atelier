import makeApiCall from '../api';
import * as actions from '../apiActions';

const apiMiddleware = ({ dispatch }) => next => action => {
  console.log(action);
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onSuccess } = action.payload;

  makeApiCall(method, url, data)
    .then(response => {
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    })
    .catch(err => console.log('api err:', err));
};

export default apiMiddleware;