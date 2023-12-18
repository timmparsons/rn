import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MyListContent from './Body/MyListContent';
import PopularContent from './Body/PopularContent';
import MyFriends from './Body/MyFriends';
import { getUsers } from '../api';

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('MyList');

  // useEffect(() => {
  //   getUsers();
  // }, []);

  const renderContent = () => {
    if (selectedTab === 'MyList') {
      return <MyListContent />;
    } else if (selectedTab === 'Popular') {
      return <PopularContent />;
    } else if (selectedTab === 'MyFriends') {
      return <MyFriends />;
    }
    return null;
  };

  return (
    <View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setSelectedTab('MyList')}>
          <Text style={[styles.tab, selectedTab === 'MyList' && styles.selectedTab]}>My List</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('Popular')}>
          <Text style={[styles.tab, selectedTab === 'Popular' && styles.selectedTab]}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('MyFriends')}>
          <Text style={[styles.tab, selectedTab === 'MyFriends' && styles.selectedTab]}>My Friends</Text>
        </TouchableOpacity>
      </View>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  tab: {
    fontSize: 18,
    color: '#7e7e7e',
  },
  selectedTab: {
    color: 'black', // Change color for the selected tab
    borderWidth: 1,
    borderColor: 'lightgray',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
});

export default Tabs;
