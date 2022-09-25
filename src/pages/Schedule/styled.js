// Absolute imports
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styles
import device from 'styles/devices';

export const TableTitle = styled.p`
  /* margin: 50px 0 50px 21px; */
  font-size: 44px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.009em;
  background: linear-gradient(90deg,#373737,#6a6a6a 50%,#8a8a8a);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${device.mobileL} {
    font-size: 64px;
  }
`;

export const NotFoundTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(90deg,#373737,#6a6a6a 50%,#8a8a8a);
  background-clip: border-box;
  background-clip: border-box;
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PageWrapper = styled.div`
  background-color: #fbfbfd;
  border-radius: 18px;
  padding: 50px 20px;
  height: 100%;
  font-family: ${({ theme: { fonts: { montserrat } } }) => montserrat};
`;

export const WeeksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SwitchWeeksButton = styled(Link)`
  border: 2px solid #0077ed;
  color: #0077ed;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  border-radius: 18px;
  background-color: white;
  margin: 0 10px;
  padding: 5px 5px;
`;

export const SwitchWeeksContainer = styled.div`
  width: 200px;
  height: 40px;
  margin: 0 auto;
  padding: 20px 5px;
  border-radius: 18px;
  margin-top: 100px;

  & .slick-slider {
    & .slick-slide {
      > div {
        display: flex;
        justify-content: center;
      }
    } 
    & .slick-prev  {
      width: 30px;
      height: 30px;
      left: -36px;
      &::before {
        font-size: 26px;
        background: linear-gradient(90deg,#373737,#6a6a6a 50%,#8a8a8a);
        background-clip: border-box;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    & .slick-next  {
      width: 30px;
      height: 30px;
      right: -36px;
      &::before {
        font-size: 26px;
        background: linear-gradient(90deg,#373737,#6a6a6a 50%,#8a8a8a);
        background-clip: border-box;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;