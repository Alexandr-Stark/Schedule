// Absolute import
import React from 'react';

// Styles
import { Wrapper } from './styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (<Wrapper>{`Copyright © ${currentYear} Stark Ind. All rights reserved.`}</Wrapper>)
};

export default Footer;