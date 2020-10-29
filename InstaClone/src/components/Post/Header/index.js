import React from 'react';
import {Text, View} from 'react-native';

import ProfilePicture from '../../ProfilePicture';
import styles from './styles';

export default function Header({imageUri, name, size}) {
  return (
    <View style={styles.container}>
      <ProfilePicture imageUri={imageUri} size={size} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}
