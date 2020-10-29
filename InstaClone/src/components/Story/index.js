import React from 'react';
import {View, Text} from 'react-native';

import ProfilePicture from '../ProfilePicture';
import styles from './styles';

function Story({imageUri, name}) {
  console.log(name);
  return (
    <View style={styles.container}>
      <ProfilePicture imageUri={imageUri} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

export default Story;
