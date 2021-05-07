import { createElement } from './utility';
import { teams } from './data';
import {
  codeBuddies,
  fetchCurrentTeamsData,
  fetchTodaysBuddyData,
} from './data';

const dashboardContainer = document.querySelector('#dashboard__container');
export default function createDashboardPage() {
  fetchTodaysBuddyData();
  //ab hier Teams container
  // fetchCurrentTeamsData();
  setTimeout(fetchCurrentTeamsData, 100);
}
export function createTodaysBuddy(buddy) {
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
    buddy[0]
  );
  const divider = createElement('span', ['buddy-card__line'], buddyCard);
  const plusSign = createElement('img', ['buddy-card__plus'], divider);
  plusSign.src = '../images/Plus.svg';
  plusSign.alt = 'Plus Icon';
  const secondBuddy = createElement(
    'p',
    ['buddy-card__item', 'text__semi16--light'],
    buddyCard,
    buddy[1]
  );
}
export function createCurrentTeam(team) {
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
  for (let i = 0; i < team.length; i++) {
    const teamCardMember = createElement(
      'p',
      ['team-card__item', 'text__semi16--light'],
      teamCard,
      team[i]
    );
    if (i < team.length - 1) {
      const teamDivider = createElement('span', ['team-card__line'], teamCard);
    }
  }
}
