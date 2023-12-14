import { url } from '../components/constants';

export const getUsers = () => {
  fetch(`${url}/users`)
    .then((response) => {
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
};
