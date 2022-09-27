const GOOGLE_MEET = {
  name: 'Google Meet',
  src: 'https://img.icons8.com/ios/50/000000/google-meet.png',
};
const MOODLE = {
  name: 'Moodle',
  src: 'https://img.icons8.com/ios-filled/50/000000/moodle.png',
};

export const LESSONS_DURATION = [
  '08:20 - 09:40',
  '09:50 - 11:10',
  '11:30 - 12:50',
  '13:00 - 14:20',
  '14:40 - 16:00',
  '16:10 - 17:30',
];

// Add your group {..., group-name: {...}}
export const GROUPS = {
  '443-1': { name: '443-1' },
  '443-2': { name: '443-2' },
  '443-3-1': { name: '443-3-1' },
  '443-3-2': { name: '443-3-2' },
  // Add your group here
};

// Add your lesson [..., {...}]
// Note: add unique number type 'id' (use incremental id)
export const LESSONS = [
  {
    id: 0,
    type: 0, // 0 - seminar, 1 - practical 
    name: 'Організація наукових досліджень з основами інтелектуальної власності',
    tutor: 'Ушенко Ю.О.',
    links: [
      { ...GOOGLE_MEET, url: '' }, // add lesson link , url: 'https://some-link'
      { ...MOODLE, url: '' } // add lesson link , url: 'https://some-link'
    ],
  },
  {
    id: 1,
    type: 1, // 0 - seminar, 1 - practical
    name: 'Безпека програм та даних',
    tutor: 'Янушевський С.В.',
    links: [
      { ...GOOGLE_MEET, url: ' https://meet.google.com/sye-jukd-bvv' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 2,
    type: 0, // 0 - seminar, 1 - practical
    name: 'Філософія',
    tutor: 'Балінченко С.П.',
    links: [
      { ...GOOGLE_MEET, url: 'meet.google.com/ujc-iihd-rfc' },
      { ...MOODLE, url: 'https://moodle.chnu.edu.ua/course/view.php?id=1476' }
    ],
  },
  {
    id: 3,
    type: 0, // 0 - seminar, 1 - practical
    name: 'English for IT',
    tutor: 'Тоненчук Т.В.',
    links: [
      { ...GOOGLE_MEET, url: 'https://meet.google.com/put-ejti-pbn' },
      { ...MOODLE, url: 'https://moodle.chnu.edu.ua/course/view.php?id=3244' }
    ],
  },
  {
    id: 4,
    type: 0, // 0 - seminar, 1 - practical
    name: 'Технології обробки Big Data',
    tutor: 'Талах М.В.',
    links: [
      { ...GOOGLE_MEET, url: 'https://meet.google.com/jxc-dcfp-xod' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 5,
    type: 0, // 0 - seminar, 1 - practical
    name: 'Паралельне програмування та розподілені системи',
    tutor: 'Горський М.П.',
    links: [
      { ...GOOGLE_MEET, url: 'https://meet.google.com/agj-wnkz-tho' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 6,
    type: 1, // 0 - seminar, 1 - practical
    name: 'Паралельне програмування та розподілені системи',
    tutor: 'Горський М.П.',
    links: [
      { ...GOOGLE_MEET, url: 'https://meet.google.com/agj-wnkz-tho' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 7,
    type: 0, // 0 - seminar, 1 - practical
    name: 'Безпека web-додатків',
    tutor: 'Прохоров Г.В',
    links: [
      { ...GOOGLE_MEET, url: 'https://meet.google.com/bje-smbu-byx' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 8,
    type: 1, // 0 - seminar, 1 - practical
    name: 'Безпека web-додатків',
    tutor: 'Прохоров Г.В.',
    links: [
      { ...GOOGLE_MEET, url: 'https://meet.google.com/bje-smbu-byx' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 9,
    type: 0, // 0 - seminar, 1 - practical
    name: 'Безпека програм та даних',
    tutor: 'Остапов С.Е.',
    links: [
      { ...GOOGLE_MEET, url: 'https://meet.google.com/hjg-oqip-nco' },
      { ...MOODLE, url: 'https://moodle.chnu.edu.ua/course/view.php?id=768' }
    ],
  },
  {
    id: 10,
    type: 1, // 0 - seminar, 1 - practical
    name: 'Технології обробки Big Data',
    tutor: 'Талах М.В.',
    links: [
      { ...GOOGLE_MEET, url: 'https://meet.google.com/jxc-dcfp-xod' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 11,
    type: 1, // 0 - seminar, 1 - practical
    name: 'Організація наукових досліджень з основами інтелектуальної власності',
    tutor: 'Ушенко Ю.О.',
    links: [
      { ...GOOGLE_MEET, url: '' },
      { ...MOODLE, url: '' }
    ],
  },
  // Add your lesson here
];

// Add your schedule [..., {...}]
export const SCHEDULES = [
  {
    id: 0,
    groupName: GROUPS['443-2'].name, // use your group from added GROUPS
    schedules: [ // Array of Arrays: 
    // 0 element - schedule for 1 week
    // 1 element - schedule for 2 week
      [
        {
          day: 'Понеділок',
          lessonIds: [null, null, null, null, 8, 5], // lessons count from 0 as array elements
          // means 0 index - it's 1 lesson, 1 index - it's 2 lesson and ect.
          // null if lesson not exists 
          // number id (from export const LESSONS = [...]) if lesson exists

        },
        {
          day: 'Вівторок',
          lessonIds: [null, null, null, 7, 9, 8],
        },
        {
          day: 'Середа',
          lessonIds: [null, null, 10, 10, 4, null],
        },
        {
          day: 'Четвер',
          lessonIds: [null, null, 4, 1, 9, 5],
        },
        {
          day: `П'ятниця`,
          lessonIds: [null, null, 0, 2, 3, null],
        },
      ],
      [
        {
          day: 'Понеділок',
          lessonIds: [null, null, null, null, 8, 5],
        },
        {
          day: 'Вівторок',
          lessonIds: [null, null, null, null, 9, 8],
        },
        {
          day: 'Середа',
          lessonIds: [null, null, null, 10, 4,  null],
        },
        {
          day: 'Четвер',
          lessonIds: [null, null, null, 1, 9, null],
        },
        {
          day: `П'ятниця`,
          lessonIds: [null, null, 2, 11, 3, null],
        },
      ],
    ],
  },
  // Add your schedule here
];