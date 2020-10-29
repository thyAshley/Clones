import React from 'react';
import {FlatList} from 'react-native';

import Post from '../Post';
import Stories from '../Stories';

const data = [
  {
    id: 1,
    user: {
      imageUri: 'https://picsum.photos/200/200',
      name: 'Luke',
    },
    imageUri: 'https://picsum.photos/400/400',
    caption: 'Wonderful Image',
    likesCount: 12,
    postedAt: '6 minutes ago',
  },
  {
    id: 2,
    user: {
      imageUri: 'https://picsum.photos/200/200',
      name: 'Luke',
    },
    imageUri: 'https://picsum.photos/400/401',
    caption: 'Wonderful Image',
    likesCount: 12,
    postedAt: '6 minutes ago',
  },
  {
    id: 3,
    user: {
      imageUri: 'https://picsum.photos/200/200',
      name: 'Luke',
    },
    imageUri: 'https://picsum.photos/400/402',
    caption: 'Wonderful Image',
    likesCount: 12,
    postedAt: '6 minutes ago',
  },
];
export default function Feed() {
  return (
    <>
      <FlatList
        keyExtractor={(post) => post.id}
        data={data}
        renderItem={({item}) => <Post post={item} />}
        ListHeaderComponent={Stories}
      />
    </>
  );
}
