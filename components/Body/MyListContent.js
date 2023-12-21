import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { data } from '../../test/fixtures';
import { getUsers } from '../../api';

const MyListContent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUsers();
        {
          userData ? setUsers(userData) : console.error('Invalid user data received:', userData);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {users && users.length > 0 ? (
        users.map((user) => <Text key={user.id}>{user.name}</Text>)
      ) : (
        <Text>No users available</Text>
      )}
    </View>
  );
};
export default MyListContent;
