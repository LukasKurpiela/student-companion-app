import { weekDays } from './data';
export { createElement, findCurrentWeekDay, createDate };

function createElement(tagName, classNames, parentNode, text = '') {
  const newElement = document.createElement(tagName);
  classNames.forEach((className) => {
    newElement.classList.add(className);
  });
  newElement.innerText = text;
  parentNode.appendChild(newElement);
  return newElement;
}

function findCurrentWeekDay() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const weekDay = weekDays[dayOfWeek];
  return 'on ' + weekDay;
}

function createDate(weekDay) {
  const today = new Date();
  const dateToday = today.getDate();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();
  return weekDay + ', ' + dateToday + '.' + currentMonth + '.' + currentYear;
}
