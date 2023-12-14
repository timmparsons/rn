export const getUsers = () => {
  fetch('http://localhost:3000/users')
    .then((response) => {
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
};
