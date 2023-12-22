import { View, Text } from 'react-native';
import React from 'react';

import { useSelector } from 'react-redux';
import { selectUsersList } from '../../reducers/usersSlice';

const MyListContent = () => {
  const users = useSelector(selectUsersList);
  console.log('qqq ', users);
  return (
    <View>
      <Text>Users should show here</Text>
    </View>
  );
  // <View>{users && users.length > 0 && users.map((user) => <Text key={user.id}>{user.name}</Text>)}</View>;
};
export default MyListContent;
