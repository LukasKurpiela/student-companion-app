import { createElement } from './utility';
import { teams } from './data';

export default function createTeamsPage() {
  const teamContainer = document.querySelector('#teams__container');
  teams.forEach((team) => {
    /* const teamCard = document.createElement('article');
    teamCard.classList.add('team_card__container');
    teamContainer.appendChild(teamCard) */
    const teamCardContainer = createElement(
      'article',
      ['team-card__container'],
      teamContainer
    );
    const teamHeadline = createElement(
      'h5',
      ['text__semi14', 'team-card__heading'],
      teamCardContainer,
      team.teamName
    );
    const teamCard = createElement(
      'section',
      ['team-card', 'border__in--light'],
      teamCardContainer
    );
    for (let i = 0; i < team.teamMembers.length; i++) {
      const teamCardMember = createElement(
        'p',
        ['team-card__item', 'text__semi16--light'],
        teamCard,
        team.teamMembers[i]
      );
      if (i < team.teamMembers.length - 1) {
        const teamDivider = createElement(
          'span',
          ['team-card__line'],
          teamCard
        );
      }
    }
  });
}
