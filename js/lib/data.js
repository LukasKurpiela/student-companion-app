import createTeamsPage from "./create-teams";
import {
  createCurrentTeam,
  createTodaysBuddy,
  createYesterdaysJournalEntry,
} from "./create-dashboard";
import createBuddyPage from "./create-codebuddys";
import { createJournalEntries } from "./create-journal";

export {
  weekDays,
  fetchTeamsData,
  fetchCurrentTeamsData,
  fetchBuddyData,
  fetchTodaysBuddyData,
  fetchJournalEntries,
  fetchYesterdaysJournal,
};

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function fetchTeamsData() {
  fetch("https://muc-2020-w1-student-api.vercel.app/api/teams")
    .then((result) => result.json())
    .then((teamData) => createTeamsPage(teamData));
}

function fetchCurrentTeamsData() {
  fetch("https://muc-2020-w1-student-api.vercel.app/api/teams")
    .then((result) => result.json())
    .then((teamData) => createCurrentTeam(teamData[3]));
}

function fetchBuddyData() {
  fetch("https://muc-2020-w1-student-api.vercel.app/api/buddies")
    .then((result) => result.json())
    .then((buddyData) => createBuddyPage(buddyData));
}

function fetchTodaysBuddyData() {
  fetch("https://muc-2020-w1-student-api.vercel.app/api/buddies")
    .then((result) => result.json())
    .then((buddyData) =>
      createTodaysBuddy(buddyData[Math.floor(Math.random() * buddyData.length)])
    );
}

function fetchJournalEntries(parentNode) {
  fetch("https://muc-2020-w1-student-api.vercel.app/api/journals")
    .then((result) => result.json())
    .then((journalData) => createJournalEntries(journalData, parentNode));
}

function fetchYesterdaysJournal(parentNode) {
  fetch("https://muc-2020-w1-student-api.vercel.app/api/journals")
    .then((result) => result.json())
    .then((journalData) =>
      createYesterdaysJournalEntry(journalData[0], parentNode)
    );
}
