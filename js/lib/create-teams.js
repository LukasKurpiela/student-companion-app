import { createElement } from './utility';

export default function createTeamsPage(teams) {
  const teamContainer = document.querySelector('#teams__container');
  teams.forEach((team, index) => {
    const teamCardContainer = createElement(
      'article',
      ['team-card__container'],
      teamContainer
    );
    const teamHeadline = createElement(
      'h5',
      ['text__semi14', 'team-card__heading'],
      teamCardContainer,
      'Team ' + (index + 1)
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
        const teamDivider = createElement(
          'span',
          ['team-card__line'],
          teamCard
        );
      }
    }
  });
}
