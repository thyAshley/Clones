import React from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default function Post({post: {user}}) {
  return (
    <>
      <Header imageUri={user.imageUri} name={user.name} size={40} />
      <Body />
      <Footer />
    </>
  );
}
