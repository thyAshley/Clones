import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default function Post({post}) {
  return (
    <>
      <Header imageUri={post.user.imageUri} name={post.user.name} size={40} />
      <Body imageUri={post.imageUri} />
      <Footer
        likesCount={post.likesCount}
        caption={post.caption}
        postedAt={post.postedAt}
      />
    </>
  );
}
