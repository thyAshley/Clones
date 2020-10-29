import React from 'react';
import {Image, View} from 'react-native';

import styles from './styles';

export default function ProfilePicture({imageUri}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageBorder}>
        <Image style={styles.imageStyle} source={{uri: imageUri}} />
      </View>
    </View>
  );
}
