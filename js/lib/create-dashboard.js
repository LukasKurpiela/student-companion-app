import { createElement } from './utility';
import { teams } from './data';
import { codeBuddies } from './data';

export default function createDashboardPage() {
  const dashboardContainer = document.querySelector('#dashboard__container');
  const teamCardContainerBuddys = createElement(
    'article',
    ['team-card__container'],
    dashboardContainer
  );
  const buddyTodayHeadline = createElement(
    'h5',
    ['text__semi14', 'team-card__heading'],
    teamCardContainerBuddys,
    'Your Code Buddy for Today:'
  );
  const buddyCard = createElement(
    'section',
    ['buddy-card', 'border__in--light'],
    teamCardContainerBuddys
  );
  const firstBuddy = createElement(
    'p',
    ['buddy-card__item', 'text__semi16--light'],
    buddyCard,
    codeBuddies[0].buddy1
  );
  const divider = createElement('span', ['buddy-card__line'], buddyCard);
  const plusSign = createElement('img', ['buddy-card__plus'], divider);
  plusSign.src = '../images/Plus.svg';
  plusSign.alt = 'Plus Icon';
  const secondBuddy = createElement(
    'p',
    ['buddy-card__item', 'text__semi16--light'],
    buddyCard,
    codeBuddies[0].buddy2
  );
  const teamCardContainer = createElement(
    'article',
    ['team-card__container'],
    dashboardContainer
  );
  const teamHeadline = createElement(
    'h5',
    ['text__semi14', 'team-card__heading'],
    teamCardContainer,
    'Your Current Team:'
  );
  const teamCard = createElement(
    'section',
    ['team-card', 'border__in--light'],
    teamCardContainer
  );
  for (let i = 0; i < teams[0].teamMembers.length; i++) {
    const teamCardMember = createElement(
      'p',
      ['team-card__item', 'text__semi16--light'],
      teamCard,
      teams[0].teamMembers[i]
    );
    if (i < teams[0].teamMembers.length - 1) {
      const teamDivider = createElement('span', ['team-card__line'], teamCard);
    }
  }
}
