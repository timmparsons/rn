import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { getPopularMovies } from '../../api';

const PopularContent = () => {
  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <View>
      <Text>PopularContent</Text>
    </View>
  );
};

export default PopularContent;
