import { url } from '../components/constants';
import { addUsers } from '../reducers/usersSlice';
import { useDispatch } from 'react-redux';

export const getUsers = () => {
  // const dispatch = useDispatch();

  fetch(`${url}/users`)
    .then((response) => {
      console.log('xxx ', response);
      // dispatch(addUsers(response.json()));
    })
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
};
