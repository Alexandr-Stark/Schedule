// Absolute import
import styled from 'styled-components';

// Styles
import device from 'styles/devices';

export const SliderWrapper = styled.div`
  padding: 1px;

  @media ${device.tabletL} {
    padding: 30px;
  } 

  & .slick-slider {
    display: flex;
    align-items: center;
    height: 300px;
    margin-top: 20px;

  & .slick-list {
    box-shadow: 0 0 9px 1px rgb(0 0 0 / 7%);
    border-radius: 18px;
    /* height: 270px;
    padding: 10px 50px; */

    & .slick-track {
      display: flex;

      & .slick-slide {
        padding: 0;
        margin: 0 1px;

        @media ${device.tabletL} {
          margin: 0 15px;
        } 

        & > div {
          height: 100%;
        }
      }
    }
  }
  & .slick-dots {
    > li {
      & ::before {
        font-size: 10px;
      }
    }
  }
}
`;