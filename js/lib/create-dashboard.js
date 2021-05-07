import {
  createElement,
  createRating,
  starClear,
  starFill,
  rectangleClear,
  rectangleFill,
} from './utility';
import { teams } from './data';
import {
  codeBuddies,
  fetchCurrentTeamsData,
  fetchTodaysBuddyData,
  fetchYesterdaysJournal,
} from './data';

const dashboardContainer = document.querySelector('#dashboard__container');
export default function createDashboardPage() {
  fetchTodaysBuddyData();
  //ab hier Teams container
  setTimeout(fetchCurrentTeamsData, 200);
  setTimeout(fetchYesterdaysJournal(dashboardContainer), 1000);
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

export function createYesterdaysJournalEntry(entry, parentNode) {
  const journalCardHeading = createElement(
    'h5',
    ['text__semi14', 'team-card__heading'],
    parentNode,
    "Yesterday's Journal:"
  );
  const journalCard = createElement(
    'article',
    ['card', 'border__shadow--grey'],
    parentNode
  );
  const ratingSection = createElement('section', ['card__rating'], journalCard);
  const ratingHeadline = createElement(
    'p',
    ['text__regular12'],
    ratingSection,
    'Rating:'
  );
  const ratingContainer = createElement('div', ['card__stars'], ratingSection);
  const ratingFullStars = createRating(
    starFill,
    entry.rating,
    'card__star',
    'Full Star'
  );
  ratingFullStars.forEach((rating) => ratingContainer.appendChild(rating));
  const ratingEmptyStars = createRating(
    starClear,
    5 - entry.rating,
    'card__star',
    'Empty Star'
  );
  ratingEmptyStars.forEach((rating) => ratingContainer.appendChild(rating));
  const comprehensionSection = createElement(
    'section',
    ['card__comprehension'],
    journalCard
  );
  const comprehensionHeadline = createElement(
    'p',
    ['text__regular12'],
    comprehensionSection,
    'Comprehension: '
  );
  const comprehensionContainer = createElement(
    'div',
    ['card__rectangles'],
    comprehensionSection
  );
  const comprehensionFullRectangles = createRating(
    rectangleFill,
    entry.comprehension,
    'card__rectangle',
    'Full Rectangle'
  );
  comprehensionFullRectangles.forEach((rectangle) =>
    comprehensionContainer.appendChild(rectangle)
  );
  const comprehensionEmptyRectangles = createRating(
    rectangleClear,
    10 - entry.comprehension,
    'card__rectangle',
    'Empty Rectangle'
  );
  comprehensionEmptyRectangles.forEach((rectangle) =>
    comprehensionContainer.appendChild(rectangle)
  );
  const mottoSection = createElement('section', ['card__motto'], journalCard);
  const mottoHeadline = createElement(
    'p',
    ['text__regular12'],
    mottoSection,
    'Motto:'
  );
  const mottoContent = createElement(
    'p',
    ['text__semi16--dark'],
    mottoSection,
    entry.motto
  );
  const notesSection = createElement('section', ['card__notes'], journalCard);
  const notesHeadline = createElement(
    'p',
    ['text__regular12'],
    notesSection,
    'Notes:'
  );
  const notesContent = createElement(
    'p',
    ['text__regular12--dark'],
    notesSection,
    entry.notes
  );
}
