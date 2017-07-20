import { API_URL } from '../services/constants';

const parseJSON = response =>
  response
    .json()
    .then(json => ({ response, json }))
    .catch(error => ({ response, json: { description: 'Unexpected error' } }));

const setHeaders = () => {
  const token = localStorage.getItem('id_token');
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

const callApi = (method, endpoint, body) => {
  const url = `${API_URL}/${endpoint}`;

  const options = {
    method,
    headers: setHeaders()
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(url, options).then(parseJSON);
};

export const get = endpoint => callApi('GET', endpoint);
export const post = (endpoint, body) => callApi('POST', endpoint, body);
