import React from 'react';
import {Image, View} from 'react-native';

import styles from './styles';

export default function ProfilePicture() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={{uri: 'https://picsum.photos/200/200'}}
      />
    </View>
  );
}
