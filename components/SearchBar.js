import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const SearchBar = ({ onSearch }) => {
  const onSearchText = (text) => {
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder='Search' style={styles.input} onChangeText={onSearchText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});

export default SearchBar;
