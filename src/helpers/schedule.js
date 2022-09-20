export const getStartWeekOfWorksDates = (date) => {
  const daysWeek = [];
  const currentDate = new Date(date);
  [1, 2, 3, 4, 5].forEach(days => {
    const dateOfWeek = currentDate.getDay() === 0 
      ? currentDate.getDate() - 7 + days
      : currentDate.getDate() - currentDate.getDay() + days;
   const day = new Date(currentDate.setDate(dateOfWeek));
   daysWeek.push(day);
  });
  return daysWeek;
};

export const getWeekNumber = (fromDate = new Date(), toDate = null) => {
  const currentDate = new Date(fromDate);
  const startDate = toDate 
  ? getStartWeekOfWorksDates(fromDate)
  : getStartWeekOfWorksDates(`${currentDate.getFullYear()}-09-01`)[0];

  const daysDuration = currentDate.getTime() - startDate.getTime();

  const weekInMilliseconds = 7 * (24 * 60 * 60 * 1000);

  const daysDurationToWeekNumber = Math.trunc(daysDuration/weekInMilliseconds);

  return (daysDurationToWeekNumber % 2 === 0) ? 1 : 2;
    
};

export const getWeekWordFromNumber = (week) => week === '1' 
? 'First Week'
: 'Second Week';

export const getInitialDaysOfWeeks = () => ({ 
  1: getStartWeekOfWorksDates(new Date()),
  2: getStartWeekOfWorksDates(new Date().setDate(new Date().getDate() + 7)), 
});