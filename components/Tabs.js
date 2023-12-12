import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MyListContent from './Body/MyListContent';
import PopularContent from './Body/PopularContent';

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('MyList');
  fetch('http://localhost:3000')
    .then((response) => {
      console.log('Response from server:', response); // Log the entire response
      console.log('QQQ', response.data); // Log only the response data
      // ...
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

  const renderContent = () => {
    if (selectedTab === 'MyList') {
      return <MyListContent />;
    } else if (selectedTab === 'Popular') {
      return <PopularContent />;
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
  },
});

export default Tabs;
