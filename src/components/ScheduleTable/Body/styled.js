// Absolute imports
import styled from 'styled-components';

// Styles
import device from 'styles/devices';

export const LessonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div:first-child {
    margin-top: 0;
  }
`;

export const LessonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 60px;
  background-color: #fff;
  border-radius: 18px;
  padding: 20px;
  margin-top: 10px;
  position: relative;
  > div, p { 
    margin-top: 15px;
  }

  & :first-child {
    margin-top: 0;
  }

  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: calc(100% - 20px);
    right: 0px;
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    background-color: ${({ lessonType }) =>
      lessonType === 1 ? 'aquamarine' : 'gold'};
  }

  @media ${device.tablet} {
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    > div, p { 
      margin-top: 0;
    }
  }
`;

export const LessonNumber = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #6475d2;
`;

export const LessonInfo = styled.div`
  display: flex;
  width: 100%;
  flex-basis: 50%;
  flex-grow: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 15px;
  > span {
    font-size: 15px;
    font-weight: 300;
  }
  & :first-child {
    width: 100%;
    max-width: 307px;
    font-size: 20px;
    font-weight: 700;
    color: #393939;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  @media ${device.tablet} {
    align-items: flex-start;
    text-align: left;
  }
`;

export const LessonLinks = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  background-color: #ff7f7f47;
  padding: 8px 5px;
  border-radius: 18px;
  & :first-child {
    margin-left: 0;
  }
  > a {
    width: 36px;
    margin-left: 20px;
    > img {
      object-fit: contain;
      width: 100%;
      max-height: 36px;
    }
  }
`;

export const LessonTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-basis: 25%;
  font-size: 20px;
  font-weight: 500;
  color: #5e5e5e;
  margin-left: 10px;
`;