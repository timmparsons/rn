import { url, callApi } from '../components/constants';

export const getPopularMovies = () => {
  callApi('https://jsonplaceholder.typicode.com/todos/1');
};

export const getUsers = () => {
  callApi(`${url}/users`);
};
