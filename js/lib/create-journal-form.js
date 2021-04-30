import { createElement, createDate } from './utility';

export function journalFormDate() {
  const journalDate = document.querySelector('#journal__date');
  journalDate.innerHTML = createDate('TODAY');
  /*   const journalDate = createElement(
    'p',
    ['text__semi16--dark'],
    journal,
    createDate('TODAY')
  ); */
}
