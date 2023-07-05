const day = document.querySelector('.date__day');
const date = document.querySelector('.date');
const month = document.querySelector('.date__month');
const year = document.querySelector('.date__year');
const digitalClock = document.querySelector('.digital__clock');

const arrowSecond = document.querySelector('.clock__seconds__arrow');
const arrowMinutes = document.querySelector('.clock__minutes__arrow');
const arrowHours = document.querySelector('.clock__hours__arrow');

const namesOfMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

const arrDay = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четверг',
  "П'ятниця",
  'Субота',
];

setInterval(() => {
  const currentTime = new Date();
  const currentDay = arrDay[currentTime.getDay()];
  const currentDate = currentTime.getDate();
  const currentMonth = namesOfMonth[currentTime.getMonth()];
  const currentYear = currentTime.getFullYear();
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();

  const changeSeconds = (360 / 60) * currentSecond;
  const changeMinutes = (360 / 60) * currentMinutes;
  // const changeMinutes =    (360 / 60) * currentMinutes + (360 / 3600) * currentSecond;

  const changeHours =
    (360 / 12) * currentHour + (360 / 12 / 60) * currentMinutes;

  const formatTime = `${currentHour
    .toString()
    .padStart(2, '0')} : ${currentMinutes
    .toString()
    .padStart(2, '0')} : ${currentSecond.toString().padStart(2, '0')}`;

  // console.log(currentSecond);
  // console.log(changeSeconds);
  // console.log(formatTime);
  // console.log(currentHour);
  // console.log(currentTime);
  // console.log(currentDate);
  // console.log(currentDay);
  // console.log(currentMonth);
  // console.log(currentYear);

  day.textContent = currentDay;
  date.textContent = currentDate;
  month.textContent = currentMonth;
  year.textContent = currentYear;
  digitalClock.textContent = `Поточний час :   ${formatTime}`;
  arrowSecond.style.transform = `rotate(${changeSeconds}deg)`;
  arrowMinutes.style.transform = `rotate(${changeMinutes}deg)`;
  arrowHours.style.transform = `rotate(${changeHours}deg)`;
}, 1000);
