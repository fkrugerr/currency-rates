import axios from 'axios';
import { pathOr } from 'rambda';

const API = axios.create({
  baseURL: 'https://api.ratesapi.io/api/',
});

export default async (endpoint, params = {}, method = 'get') => {
  const config = {
    method,
    url: endpoint,
    params: {
      ...params,
    },
  };
  try {
    const response = await API(config);
    if (response.status === 200) {
      return response.data;
    }
    const errorObj = {
      status: response.status,
      response,
    };
    throw errorObj;
  } catch (error) {
    const message = pathOr('API error', 'response.data.error', error);
    return {
      error: true,
      message,
    };
  }
};
