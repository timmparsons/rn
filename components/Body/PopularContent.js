import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const PopularContent = ({ data }) => {
  console.log('QWE ', data);
  return (
    <View>
      {data ? (
        data.length ? (
          data.map((movie) => <Text key={movie.id}>{movie.title}</Text>)
        ) : (
          <Text>No movies available</Text>
        )
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
};

export default PopularContent;
