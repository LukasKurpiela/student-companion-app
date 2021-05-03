import { weekDays } from './data';
export { createElement, findCurrentWeekDay, createDate };
export {
  createStars,
  createRectangles,
  interactiveRatingStars,
  interactiveRatingRectangles,
};

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

const starClear = '../../images/Star Clear.svg';
const starFill = '../../images/Star.svg';
const rectangleClear = '../../images/Rectangle Clear.svg';
const rectangleFill = '../../images/Rectangle.svg';

function createRating(source, count, className) {
  let ratingSymbols = [];
  for (let i = 0; i < count; i++) {
    const symbol = document.createElement('img');
    symbol.classList.add(className);
    symbol.src = source;
    ratingSymbols.push(symbol);
  }
  return ratingSymbols;
}

function createStars() {
  return createRating(starClear, 5, 'journal__star');
}

function createRectangles() {
  return createRating(rectangleClear, 10, 'journal__rectangle');
}

function interactiveRatingStars() {
  const allStars = document.querySelectorAll('.journal__star');
  for (let i = 0; i < allStars.length; i++) {
    allStars[i].addEventListener('click', () => {
      for (let j = i; j >= 0; j--) {
        allStars[j].src = starFill;
      }
      for (let z = i + 1; z < allStars.length; z++) {
        allStars[z].src = starClear;
      }
    });
  }
  const starHeadline = document.querySelector('.journal__rating p');
  starHeadline.addEventListener('click', () => {
    allStars.forEach((star) => {
      star.src = starClear;
    });
  });
}

function interactiveRatingRectangles() {
  const allRectangles = document.querySelectorAll('.journal__rectangle');
  for (let i = 0; i < allRectangles.length; i++) {
    allRectangles[i].addEventListener('click', () => {
      for (let j = i; j >= 0; j--) {
        allRectangles[j].src = rectangleFill;
      }
      for (let z = i + 1; z < allRectangles.length; z++) {
        allRectangles[z].src = rectangleClear;
      }
    });
  }
  const comprehensionHeadline = document.querySelector(
    '.journal__comprehension p'
  );
  comprehensionHeadline.addEventListener('click', () => {
    allRectangles.forEach((rectangle) => {
      rectangle.src = rectangleClear;
    });
  });
}
