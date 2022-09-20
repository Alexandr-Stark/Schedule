// Absolute import
import React, { useState } from 'react';

// Components
import ScheduleCard from 'components/ScheduleTable/Card';
import ScheduleBody from 'components/ScheduleTable/Body';
import Modal from 'components/uikit/Modal';


// Styled
import {} from './styled';

const ScheduleTable = ({ 
  week,
  schedule: {
    day,
    date,
    lessonIds,
  },
}) => {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const toggleScheduleOpen = () => setIsScheduleOpen(prevState => !prevState);

  return (
    <>
      <ScheduleCard
        day={day}
        date={date}
        onCardOpen={toggleScheduleOpen}
      />
      <Modal 
        isOpen={isScheduleOpen}
        title={`${day}, ${week} тиждень`}
        onClose={toggleScheduleOpen}
      >
        <ScheduleBody
          lessonIds={lessonIds} 
        />
      </Modal>
    </>
  );
};

export default ScheduleTable;