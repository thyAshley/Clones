import React from 'react';
import {FlatList, View} from 'react-native';

import styles from './styles';
import Story from '../Story';

const data = [
  {
    id: 1,
    imageUri: 'https://picsum.photos/200/200',
    name: 'Luke',
  },
  {
    id: 2,
    imageUri: 'https://picsum.photos/200/201',
    name: 'John',
  },
  {
    id: 3,
    imageUri: 'https://picsum.photos/200/202',
    name: 'James',
  },
  {
    id: 4,
    imageUri: 'https://picsum.photos/200/203',
    name: 'Alex',
  },
  {
    id: 5,
    imageUri: 'https://picsum.photos/200/204',
    name: 'George',
  },
];
export default function Stories() {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({item}) => (
          <Story imageUri={item.imageUri} name={item.name} />
        )}
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
