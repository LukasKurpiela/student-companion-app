import createBuddyPage from './lib/create-codebuddys';
import createTeamsPage from './lib/create-teams';

if (document.querySelector('#codebuddy__container')) {
  createBuddyPage();
} else {
  createTeamsPage();
}
