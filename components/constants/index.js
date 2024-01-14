export const url = 'http://localhost:3000';

export const dbConnection = {
  host: 'localhost',
  user: 'root',
  password: 'Livchloebeau3!',
  database: 'RN',
};

export const callApi = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
};
