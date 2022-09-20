// Absolute import
import styled from 'styled-components';

export const SliderWrapper = styled.div`
  padding: 30px;
  & .slick-slider {
    display: flex;
    align-items: center;
    height: 300px;
  & .slick-list {
    box-shadow: 0 0 9px 1px rgb(0 0 0 / 7%);
    border-radius: 18px;

    & .slick-track {
      display: flex;

      & .slick-slide {
        padding: 0;
        margin-left: 30px;

        & > div {
          height: 100%;
        }
      }
    }
  }
}
`;