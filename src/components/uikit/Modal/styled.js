// Absolute imports
import styled from 'styled-components';
import Modal from 'styled-react-modal';

// Helpers
import { getControlButtonColorByType } from 'helpers/modal';

export const StyledModal = Modal.styled`
  width: 100%;
  max-width: 850px;
  height: 548px;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 18px;
  background-color: ${({ theme: { colors: { lightGay } } }) => lightGay};
  font-family: ${({ theme: { fonts: { montserrat } } }) => montserrat};
`;

export const Header = styled.div`
  width: 100%;
  height: 45px;
  align-self: flex-start;
  display: flex;
  align-items: center;
  padding: 35px 15px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  background: linear-gradient(90deg,#ffa54d14,#a07bf063 50%,#43aeff38);
`;

export const ControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button:first-child {
    margin-left: 0;
  }
`;

export const TitleWrapper = styled.div`
  margin: 0 auto;
  font-size: 21px;
  font-weight: 600;
  color: #595959;
`;

export const ControlButton = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${({ control }) => getControlButtonColorByType(control).bgrnd};
  border-width: 1px;
  border-color: ${({ control }) => getControlButtonColorByType(control).border};
  margin-left: 10px;
`;

export const Body = styled.div`
  width: 100%;
  height: inherit;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  overflow-y: scroll;
`;

