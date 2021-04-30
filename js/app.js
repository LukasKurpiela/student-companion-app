import createBuddyPage from './lib/create-codebuddys';
import createTeamsPage from './lib/create-teams';
import createDashboardPage from './lib/create-dashboard';

if (document.querySelector('#codebuddy__container')) {
  createBuddyPage();
} else if (document.querySelector('#teams__container')) {
  createTeamsPage();
} else {
  createDashboardPage();
}
