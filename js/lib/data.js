import createTeamsPage from './create-teams';
import { createCurrentTeam, createTodaysBuddy } from './create-dashboard';
import createBuddyPage from './create-codebuddys';

export {
  teams,
  codeBuddies,
  weekDays,
  fetchTeamsData,
  fetchCurrentTeamsData,
  fetchBuddyData,
  fetchTodaysBuddyData,
  fetchJournalEntries
};

const teams = [
  {
    teamName: 'Team 1',
    teamMembers: ['Sharine', 'Sacid', 'Lukas', 'Helena'],
  },
  {
    teamName: 'Team 2',
    teamMembers: ['Florian', 'Borjan', 'Sabrina', 'Jens'],
  },
  {
    teamName: 'Team 3',
    teamMembers: ['Bejan', 'Felix', 'Farah', 'Gabriele'],
  },
  {
    teamName: 'Team 4',
    teamMembers: ['Vika', 'Oliver G.', 'Oliver N.', 'Matthias'],
  },
];

const codeBuddies = [
  { buddy1: 'Sharine', buddy2: 'Sacid' },
  { buddy1: 'Lukas', buddy2: 'Helena' },
];

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
function fetchTeamsData() {
  fetch('https://muc-2020-w1-student-api.vercel.app/api/teams')
    .then((result) => result.json())
    .then((teamData) => createTeamsPage(teamData));
}

function fetchCurrentTeamsData() {
  fetch('https://muc-2020-w1-student-api.vercel.app/api/teams')
    .then((result) => result.json())
    .then((teamData) => createCurrentTeam(teamData[3]));
}

function fetchBuddyData() {
  fetch('https://muc-2020-w1-student-api.vercel.app/api/buddies')
    .then((result) => result.json())
    .then((buddyData) => createBuddyPage(buddyData));
}

function fetchTodaysBuddyData() {
  fetch('https://muc-2020-w1-student-api.vercel.app/api/buddies')
    .then((result) => result.json())
    .then((buddyData) =>
      createTodaysBuddy(buddyData[Math.floor(Math.random() * buddyData.length)])
    );
}

function fetchJournalEntries() {
  fetch('https://muc-2020-w1-student-api.vercel.app/api/journals')
    .then((result) => result.json())
    .then((journalData) =>
      createJournalEntries(journalData)
    );
}
