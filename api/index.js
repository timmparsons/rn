import { url } from '../components/constants';

export const apiOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGMwM2NhNzZkY2FiNzY3MDAzYmI5MDc2OGZmZTMwMyIsInN1YiI6IjVmMTM2NTdkNzg1NzBlMDAzNDU3YjczMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9JQqWVF0mvJY-vamd5lFkQhcs39AYlefqL3muHzitEg',
  },
};

export const callApi = async (url, options = null) => {
  await fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error(error));
};

export const getPopularMovies = () => {
  callApi('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', apiOptions);
};

export const getUsers = () => {
  callApi(`${url}/users`);
};
