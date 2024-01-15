import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MyListContent from './Body/MyListContent';
import PopularContent from './Body/PopularContent';
import MyFriends from './Body/MyFriends';
import { getUsers } from '../api';
import { getPopularMovies } from '../api';

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('MyList');
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await getUsers(); // Make sure getUsers is awaited
      await getPopularMoviesCall();
    };

    fetchData();
  }, []);

  const getPopularMoviesCall = async () => {
    const data = await getPopularMovies();
    console.log('Get popular movies ', data);
    if (data && data.results) setPopularMovies(data.results);
  };

  console.log('XXX ', popularMovies);
  const renderContent = () => {
    if (selectedTab === 'MyList') {
      return <MyListContent />;
    } else if (selectedTab === 'Popular') {
      return <PopularContent data={popularMovies} />;
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
