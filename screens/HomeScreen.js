import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import ProfileBar from '../components/ProfileBar';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';

const HomeScreen = () => {
  const performSearch = (text) => {
    console.log(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProfileBar />
      <SearchBar onSearch={performSearch} />
      <Tabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
