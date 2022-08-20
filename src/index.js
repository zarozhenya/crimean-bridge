import 'modern-normalize';
import './sass/index.scss';

import { Loading } from 'notiflix';

const endDate = new Date('2022-08-24 00:00');

const refs = {
  daysLabel: document.querySelector('[data-days]'),
  hoursLabel: document.querySelector('[data-hours]'),
  minutesLabel: document.querySelector('[data-minutes]'),
  secondsLabel: document.querySelector('[data-seconds]'),
};

const padTime = time => String(time).padStart(2, '0');
const getTime = () => {
  const now = Date.now();

  let delta = (endDate - now) / 1000;

  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  const hours = Math.floor(delta / 3600);
  delta -= hours * 3600;

  const minutes = Math.floor(delta / 60);
  delta -= minutes * 60;

  const seconds = Math.floor(delta);

  return { days, hours, minutes, seconds };
};

const renderClock = ({ days, hours, minutes, seconds }) => {
  refs.daysLabel.textContent = padTime(days);
  refs.hoursLabel.textContent = padTime(hours);
  refs.minutesLabel.textContent = padTime(minutes);
  refs.secondsLabel.textContent = padTime(seconds);
};

const updateTime = () => {
  const time = getTime();

  renderClock(time);
};

const onOpenPage = () => {
  updateTime();
  setInterval(updateTime, 1000);
};

onOpenPage();
