// Absolute imports
import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  background-color: white;
  font-family: ${({ theme: { fonts: { montserrat } } }) => montserrat};
  min-height: 100vh;
  padding: 0px 16px 40px;
`;