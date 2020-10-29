import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import ProfilePicture from './src/components/ProfilePicture';
import Stories from './src/components/Stories';

import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar />
      <HomeScreen />
      <Stories />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
