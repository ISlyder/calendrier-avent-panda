export interface Calendar {
  day: number;
  text: string;
  img: string;
  action?: () => void;
}

export const DATA: Calendar[] = [
  {
    day: 1,
    text: 'Today is first day of December !',
    img: 'https://picsum.photos/seed/a/200',
    action: () => {
      alert('Day 1');
    }
  },
  {
    day: 2,
    text: 'Today is second day of December !',
    img: 'https://picsum.photos/seed/toto/200'
  },
  {
    day: 3,
    text: 'Today is third day of December !',
    img: 'https://picsum.photos/seed/tata/200'
  },
  {
    day: 4,
    text: 'Today is fourth day of December !',
    img: 'https://picsum.photos/seed/c/200'
  },
  {
    day: 5,
    text: 'Today is fifth day of December !',
    img: 'https://picsum.photos/seed/christmas/200'
  },
  {
    day: 6,
    text: 'Today is sixth day of December !',
    img: 'https://picsum.photos/seed/tree/200'
  },
  {
    day: 7,
    text: 'Today is seventh day of December !',
    img: 'https://picsum.photos/seed/z/200'
  },
  {
    day: 8,
    text: 'Today is eighth day of December !',
    img: 'https://picsum.photos/seed/picsum/200'
  },
  {
    day: 9,
    text: 'Today is ninth day of December !',
    img: 'https://picsum.photos/seed/picsum/200'
  },
  {
    day: 10,
    text: 'Today is tenth day of December !',
    img: 'https://picsum.photos/seed/picsum/200'
  },
  {
    day: 11,
    text: 'Today is eleventh day of December !',
    img: 'https://picsum.photos/seed/fg/200'
  },
  {
    day: 12,
    text: 'Today is twelfth day of December !',
    img: 'https://picsum.photos/seed/picsum/200'
  },
  {
    day: 13,
    text: 'Today is thirteenth day of December !',
    img: 'https://picsum.photos/seed/picsum/200'
  },
  {
    day: 14,
    text: 'Today is fourteenth day of December !',
    img: 'https://picsum.photos/seed/k/200'
  },
  {
    day: 15,
    text: 'Today is fifteenth day of December !',
    img: 'https://picsum.photos/seed/picsum/200'
  },
  {
    day: 16,
    text: 'Today is sixteenth day of December !',
    img: 'https://picsum.photos/seed/h/200'
  },
  {
    day: 17,
    text: 'Today is seventeenth day of December !',
    img: 'https://picsum.photos/seed/m/200'
  },
  {
    day: 18,
    text: 'Today is eighteenth day of December !',
    img: 'https://picsum.photos/seed/picsum/200'
  },
  {
    day: 19,
    text: 'Today is nineteenth day of December !',
    img: 'https://picsum.photos/seed/picsum/200'
  },
  {
    day: 20,
    text: 'Today is twentieth day of December !',
    img: 'https://picsum.photos/seed/picsum/200'
  },
  {
    day: 21,
    text: 'Today is twenty-first day of December !',
    img: 'https://picsum.photos/seed/po/200'
  },
  {
    day: 22,
    text: 'Today is twenty-second day of December !',
    img: 'https://picsum.photos/seed/picsum/200'
  },
  {
    day: 23,
    text: 'Today is twenty-third day of December !',
    img: 'https://picsum.photos/seed/pi/200'
  },
  {
    day: 24,
    text: 'Today is twenty-fourth day of December !',
    img: 'https://picsum.photos/seed/dgh/200'
  },
  {
    day: 25,
    text: 'Today is twenty-fifth day of December !',
    img: 'https://picsum.photos/seed/dg/200'
  }
]
