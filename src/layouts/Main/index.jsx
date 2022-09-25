// Absolute imports
import React from 'react';

// Components
import Header from 'layouts/Main/Header';
import Footer from 'layouts/Main/Footer';

// Styled
import { Container } from './styled'; 

const Layout = ({ id, children }) => {
  return (
    <>
      <Header />
      <Container id={id}>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
