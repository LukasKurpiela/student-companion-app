import { createElement, createDate, findCurrentWeekDay } from './utility';
import { codeBuddies } from './data';

export default function createBuddyPage() {
  const buddyContainer = document.querySelector('#codebuddy__container');
  codeBuddies.forEach((team) => {
    const buddyCard = createElement(
      'section',
      ['buddy-card', 'border__in--light'],
      buddyContainer
    );
    const firstBuddy = createElement(
      'p',
      ['buddy-card__item', 'text__semi16--light'],
      buddyCard,
      team.buddy1
    );
    const divider = createElement('span', ['buddy-card__line'], buddyCard);
    const plusSign = createElement('img', ['buddy-card__plus'], divider);
    plusSign.src = '../images/Plus.svg';
    plusSign.alt = 'Plus Icon';
    const secondBuddy = createElement(
      'p',
      ['buddy-card__item', 'text__semi16--light'],
      buddyCard,
      team.buddy2
    );
  });
}

export function buddyHeader() {
  const buddyHeader = document.querySelector('header');
  const headerDate = createElement(
    'p',
    ['text__regular12'],
    buddyHeader,
    createDate(findCurrentWeekDay())
  );
}
