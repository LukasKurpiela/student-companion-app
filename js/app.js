import createBuddyPage, { buddyHeader } from './lib/create-codebuddys';
import createTeamsPage from './lib/create-teams';
import createDashboardPage from './lib/create-dashboard';
import { journalFormDate } from './lib/create-journal-form';
import addSymbols from './lib/rating';
import { interactiveRatingStars, interactiveRatingRectangles } from './lib/utility';

if (document.querySelector('#codebuddy__container')) {
  createBuddyPage();
  buddyHeader();
} else if (document.querySelector('#teams__container')) {
  createTeamsPage();
} else if (document.querySelector('#dashboard__container')) {
  createDashboardPage();
} else if (document.querySelector('.journal__stars')) {
  addSymbols();
  interactiveRatingStars();
  interactiveRatingRectangles();
} else {
  journalFormDate();
} 
