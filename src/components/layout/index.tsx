import React from 'react';
import Header from '@components/layout/header';
import Footer from '@components//layout/footer';
// rfcp + Tab

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

function Layout(props: Props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
