// Absolute imports
import React from 'react';

// Styles
import { 
  Wrapper,
  Day,
  Date,
  InfoBlock,
  DateBlock,

  Label,
 } from './styled';

const ScheduleCard = ({ day, date, onCardOpen }) => {
  return (
    <Wrapper>
      <DateBlock>
        <Day>{day}</Day>
        <Date>{date}</Date>
      </DateBlock>
      <InfoBlock>
        <Label onClick={onCardOpen}>MORE</Label>
      </InfoBlock>
    </Wrapper>
  );
};

export default ScheduleCard;