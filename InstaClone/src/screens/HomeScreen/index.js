import React from 'react';

import Stories from '../../components/Stories';
import Post from '../../components/Post';

const post = {
  user: {
    imageUri: 'https://picsum.photos/200/200',
    name: 'Luke',
  },
};
export default function HomeScreen() {
  return (
    <>
      <Stories />
      <Post post={post} />
    </>
  );
}
