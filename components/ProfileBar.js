import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import SearchBar from './SearchBar';

const ProfileBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const performSearch = (text) => {
    console.log(text);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.menu}>
          <Feather name='menu' size={24} color='black' />
        </View>
        <View style={styles.profile}>
          <View style={styles.icon}>
            <Entypo name='magnifying-glass' size={24} color='black' onPress={() => setShowSearchBar(!showSearchBar)} />
          </View>
          <View style={styles.icon}>
            <AntDesign name='bells' size={24} color='black' />
          </View>
          <View style={styles.icon}>
            <MaterialCommunityIcons name='face-man-profile' size={24} color='black' />
          </View>
        </View>
      </View>
      <View>{showSearchBar && <SearchBar onSearch={performSearch} />}</View>
    </>
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
