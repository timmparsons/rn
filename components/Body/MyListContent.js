import { View, Text } from 'react-native';
import React from 'react';
import { data } from '../../test/fixtures';

const MyListContent = () => {
  return (
    <View>
      {data.map((movie) => {
        return <Text key={movie.id}>{movie.title}</Text>;
      })}
    </View>
  );
};

export default MyListContent;
