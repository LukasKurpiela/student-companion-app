import { fetchJournalEntries } from './data';
import {
  createElement,
  createRating,
  starClear,
  starFill,
  rectangleClear,
  rectangleFill,
} from './utility';

const journalContainer = document.querySelector('#journal__container');

export function createJournalPage() {
  fetchJournalEntries(journalContainer);
}

export function createJournalEntries(entries, parentNode) {
  entries.forEach((entry) => {
    const journalCard = createElement(
      'article',
      ['card', 'border__shadow--grey'],
      parentNode
    );
    const ratingSection = createElement(
      'section',
      ['card__rating'],
      journalCard
    );
    const ratingHeadline = createElement(
      'p',
      ['text__regular12'],
      ratingSection,
      'Rating:'
    );
    const ratingContainer = createElement(
      'div',
      ['card__stars'],
      ratingSection
    );
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
  });
}
