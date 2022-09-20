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
]

export const LESSONS = [
  {
    id: 0,
    type: 0, // 0 - seminar, 1 - practical
    name: 'Організація наукових досліджень з основами інтелектуальної власності',
    tutor: '',
    links: [
      { ...GOOGLE_MEET, url: '' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 1,
    type: 1, // 0 - seminar, 1 - practical
    name: 'Безпека програм та даних',
    tutor: 'Янушевський С.В.',
    links: [
      { ...GOOGLE_MEET, url: '' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 2,
    type: 0, // 0 - seminar, 1 - practical
    name: 'Філософія',
    tutor: '',
    links: [
      { ...GOOGLE_MEET, url: '' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 3,
    type: 0, // 0 - seminar, 1 - practical
    name: 'English for IT',
    tutor: '',
    links: [
      { ...GOOGLE_MEET, url: '' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 4,
    type: 0, // 0 - seminar, 1 - practical
    name: 'Технології обробки Big Data',
    tutor: '',
    links: [
      { ...GOOGLE_MEET, url: '' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 5,
    type: 0, // 0 - seminar, 1 - practical
    name: 'Паралельне програмування та розподілені системи',
    tutor: '',
    links: [
      { ...GOOGLE_MEET, url: '' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 6,
    type: 1, // 0 - seminar, 1 - practical
    name: 'Паралельне програмування та розподілені системи',
    tutor: '',
    links: [
      { ...GOOGLE_MEET, url: '' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 7,
    type: 0, // 0 - seminar, 1 - practical
    name: 'Безпека web-додатків',
    tutor: '',
    links: [
      { ...GOOGLE_MEET, url: '' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 8,
    type: 1, // 0 - seminar, 1 - practical
    name: 'Безпека web-додатків',
    tutor: '',
    links: [
      { ...GOOGLE_MEET, url: '' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 9,
    type: 0, // 0 - seminar, 1 - practical
    name: 'Безпека програм та даних',
    tutor: 'Остапов С.Е.',
    links: [
      { ...GOOGLE_MEET, url: '' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 10,
    type: 1, // 0 - seminar, 1 - practical
    name: 'Технології обробки Big Data',
    tutor: '',
    links: [
      { ...GOOGLE_MEET, url: '' },
      { ...MOODLE, url: '' }
    ],
  },
  {
    id: 11,
    type: 1, // 0 - seminar, 1 - practical
    name: 'Організація наукових досліджень з основами інтелектуальної власності',
    tutor: '',
    links: [
      { ...GOOGLE_MEET, url: '' },
      { ...MOODLE, url: '' }
    ],
  },
];

export const SCHEDULES = [
  {
    id: 0,
    groupName: '443-2',
    schedules: [
      [
        {
          day: 'Понеділок',
          lessonIds: [null, null, null, null, 8, 5],

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
];