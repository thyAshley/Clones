import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import ProfilePicture from './src/components/ProfilePicture';

import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar />
      <HomeScreen />
      <ProfilePicture />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
