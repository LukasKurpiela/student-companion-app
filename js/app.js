import createBuddyPage, { buddyHeader } from './lib/create-codebuddys';
import createTeamsPage from './lib/create-teams';
import createDashboardPage from './lib/create-dashboard';
import { journalFormDate } from './lib/create-journal-form';
import addSymbols from './lib/rating';
import {
  interactiveRatingStars,
  interactiveRatingRectangles,
} from './lib/utility';
import { fetchTeamsData, fetchBuddyData } from './lib/data';

if (document.querySelector('#codebuddy__container')) {
  fetchBuddyData();
  buddyHeader();
} else if (document.querySelector('#teams__container')) {
  // createTeamsPage();
  fetchTeamsData();
} else if (document.querySelector('#dashboard__container')) {
  createDashboardPage();
} else {
  journalFormDate();
  addSymbols();
  interactiveRatingStars();
  interactiveRatingRectangles();
}
