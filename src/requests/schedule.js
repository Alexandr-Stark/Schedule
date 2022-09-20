// Constants
import { SCHEDULES, LESSONS } from 'constants/schedule';

export const getSchedules = () => SCHEDULES;

export const getScheduleByGroupName = (groupName) => SCHEDULES
  .find(item => item.groupName === groupName);

export const getLessons = () => LESSONS;

export const getLessonsByIds = (ids) => {
  const lessonIds = LESSONS.map(({ id }) => id);
  return ids.map(item => lessonIds.includes(item) ? LESSONS[lessonIds.indexOf(item)] : null)
};