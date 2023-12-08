import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import ProfileBar from '../components/ProfileBar';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
