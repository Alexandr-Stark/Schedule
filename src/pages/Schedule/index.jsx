// Absolute imports
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Components
import Layout from 'layouts/Main';
import ScheduleTable from 'components/ScheduleTable';
import ScheduleSlider from 'components/ScheduleTable/Slider';

// Requests
import { getScheduleByGroupName } from 'requests/schedule';

// Helpers
import { getInitialDaysOfWeeks, getWeekWordFromNumber, getWeekNumber } from 'helpers/schedule';

// Styles
import { TableTitle, PageWrapper, WeeksContainer } from './styled'; 


const Schedule = () => {
  const [schedule, setSchedule] = useState(null);
  const [daysOfWeeks, setDaysOfWeeks] = useState(getInitialDaysOfWeeks());
  const { groupName: groupNameParam, week: weekParam } = useParams();

  const navigate = useNavigate();

  const [isCurrentWeekSecond] = useState(getWeekNumber() === 2);

  const changeWeeksOrder = useCallback((week = null) =>{
    if (week && isCurrentWeekSecond) return week === 1 ? 2 : 1; 
    if (!week && isCurrentWeekSecond) return setDaysOfWeeks(prevState => ({
      1: prevState[2],
      2: prevState[1]
    })); 
    return week;
  }, [isCurrentWeekSecond]);

  useEffect(() => {
    changeWeeksOrder();
    return () => setDaysOfWeeks(getInitialDaysOfWeeks());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSchedule(getScheduleByGroupName(groupNameParam));
  }, [groupNameParam]);

  const renderSchedule = (schedule, week) => schedule
  ?.schedules[week - 1]?.map((item, index) => (
    <ScheduleTable 
      key={daysOfWeeks[week][index]} 
      week={week} 
      schedule={{
        date: daysOfWeeks[week][index]?.getDate(),
        ...item
      }}/>
    ));


  return (
    <Layout id="schedule">
      <PageWrapper>
        <TableTitle>
          {weekParam
            ? `Schedule of ${getWeekWordFromNumber(weekParam)}`
            : 'Schedules'}
        </TableTitle>
        {weekParam ? (
          <WeeksContainer>
            <ScheduleSlider>
              {renderSchedule(schedule, weekParam)}
            </ScheduleSlider>
          </WeeksContainer>
        ) : (
          <WeeksContainer>
            <ScheduleSlider>{renderSchedule(schedule, changeWeeksOrder(1))}</ScheduleSlider>
            <ScheduleSlider>{renderSchedule(schedule, changeWeeksOrder(2))}</ScheduleSlider>
          </WeeksContainer>
        )}
        <button onClick={() => navigate(`/schedule/${groupNameParam}/weeks/${1}`)}>Go-1</button>
        <button onClick={() => navigate(`/schedule/${groupNameParam}/weeks/${2}`)}>Go-2</button>
        <button onClick={() => navigate(`/schedule/${groupNameParam}/weeks/`)}>Weeks</button>
      </PageWrapper>
    </Layout>
  );
};

export default Schedule;
