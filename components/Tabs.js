import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MyListContent from './Body/MyListContent';
import PopularContent from './Body/PopularContent';
import MyFriends from './Body/MyFriends';
import { getUsers } from '../api';

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('MyList');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getUsers();
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

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
    color: 'black',
  },
});

export default Tabs;
