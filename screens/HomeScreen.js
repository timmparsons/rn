import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import ProfileBar from '../components/ProfileBar';
import Tabs from '../components/Tabs';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileBar />
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
