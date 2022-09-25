/// Absolute import
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styles
import device from 'styles/devices';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: rgba(0,0,0,0.8);
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 33;
`;

export const GroupLink = styled(Link)`
  color: white;
  font-size: 19px;
  height: 100%;
  opacity: .7;
  white-space: nowrap;
  &:hover {
    opacity: 1;
  }
`;

export const GroupsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: scroll;
  > li {
    width: 100%;
    max-width: 110px;
    height: 44px;
    padding: 0 20px;
    > a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media ${device.mobile} {
    justify-content: center;
  }
`;