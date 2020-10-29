import React from 'react';
import {Image, View} from 'react-native';

import styles from './styles';

export default function Body({imageUri}) {
  return <Image source={{uri: imageUri}} style={styles.image} />;
}
