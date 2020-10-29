import React from 'react';
import {Image, View} from 'react-native';

import styles from './styles';

export default function ProfilePicture({imageUri, size = 70}) {
  return (
    <View style={[styles.container, {width: size + 6, height: size + 6}]}>
      <View style={styles.imageBorder}>
        <Image
          style={[styles.imageStyle, {width: size, height: size}]}
          source={{uri: imageUri}}
        />
      </View>
    </View>
  );
}
