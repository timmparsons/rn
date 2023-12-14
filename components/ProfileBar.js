import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Feather name='menu' size={24} color='black' />
      </View>
      <View style={styles.profile}>
        <View style={styles.icon}>
          <AntDesign name='bells' size={24} color='black' />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons name='face-man-profile' size={24} color='black' />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  menu: {},
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    paddingHorizontal: 20,
  },
});

export default ProfileBar;
