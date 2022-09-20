// Absolute imports
import React from 'react';

// Components
import Header from 'layouts/Main/Header';

// Styled
import { Container } from './styled'; 

const Layout = ({ id, children }) => {
  return (
    <>
      <Header />
      <Container id={id}>{children}</Container>
    </>
  );
};

export default Layout;
