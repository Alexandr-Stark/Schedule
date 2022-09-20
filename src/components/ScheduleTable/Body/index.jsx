// Absolute import
import React, { useState, useEffect } from 'react';

// Components
import Tooltip from 'components/shared/Tooltip';

// Requests
import { getLessonsByIds } from 'requests/schedule';

// Constants
import { LESSONS_DURATION } from 'constants/schedule';

// Styles
import { 
  LessonContainer,
  LessonWrapper,
  LessonNumber,
  LessonInfo,
  LessonLinks,
  LessonTime,
} from './styled';

const ScheduleBody = ({ lessonIds }) => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    setLessons(getLessonsByIds(lessonIds))
  }, [lessonIds]);

  console.log(lessons);
  return (
    <LessonContainer>
      {lessons.map((lesson, index) =>
        lesson ? (
          <LessonWrapper 
            key={`${index}-${lesson.id}`} 
            lessonType={lesson.type}
            >
            <LessonNumber>{index + 1}.</LessonNumber>
            <LessonInfo>
              <span>{lesson.name}</span>
              {lesson.tutor ? (<span>{lesson.tutor}</span>) : null}
            </LessonInfo>
            <LessonLinks>
              {lesson.links.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
                  <img src={link.src} alt={link.name}/>
                </a>
              ))}
            </LessonLinks>
            <LessonTime>{LESSONS_DURATION[index]}</LessonTime>
          </LessonWrapper>
        ) : null
      )}
    </LessonContainer>
  );
};

export default ScheduleBody; 