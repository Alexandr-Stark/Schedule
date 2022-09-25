// Absolute imports
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import SwitchWeeksSlider from 'react-slick';

// Components
import Layout from 'layouts/Main';
import ScheduleTable from 'components/ScheduleTable';
import ScheduleSlider from 'components/ScheduleTable/Slider';

// Requests
import { getScheduleByGroupName } from 'requests/schedule';

// Helpers
import { getInitialDaysOfWeeks, getWeekWordFromNumber, getWeekNumber } from 'helpers/schedule';

// Styles
import { 
  TableTitle,
  PageWrapper,
  WeeksContainer,
  SwitchWeeksContainer,
  SwitchWeeksButton,
  NotFoundTitle,
} from './styled'; 


const Schedule = () => {
  const [schedule, setSchedule] = useState(null);
  const [daysOfWeeks, setDaysOfWeeks] = useState(getInitialDaysOfWeeks());
  const { groupName: groupNameParam, week: weekParam } = useParams();

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

  const settings = {
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    adaptiveHeight: true,
    // If weekParam undefined return '2' - index of slider element
    initialSlide: !weekParam ? 2 : weekParam - 1,
  };

  if (!schedule) return (
    <Layout id="schedule">
      <NotFoundTitle>Schedule not found</NotFoundTitle>
    </Layout>)

  return (
    <Layout id="schedule">
      <PageWrapper>
        <TableTitle>
          {weekParam
            ? `Schedule Of ${getWeekWordFromNumber(weekParam)}`
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
        <SwitchWeeksContainer>
          <SwitchWeeksSlider {...settings}>
            <SwitchWeeksButton to={`/schedule/${groupNameParam}/weeks/${1}`}>Week 1</SwitchWeeksButton>
            <SwitchWeeksButton to={`/schedule/${groupNameParam}/weeks/${2}`}>Week 2</SwitchWeeksButton>
            <SwitchWeeksButton to={`/schedule/${groupNameParam}/weeks`}>Weeks</SwitchWeeksButton>
          </SwitchWeeksSlider>
        </SwitchWeeksContainer>
      </PageWrapper>
    </Layout>
  );
};

export default Schedule;
