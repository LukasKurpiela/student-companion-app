import createBuddyPage, { buddyHeader } from "./lib/create-codebuddys";
import createTeamsPage from "./lib/create-teams";
import createDashboardPage from "./lib/create-dashboard";
import { journalFormDate, submitEntry } from "./lib/create-journal-form";
import addSymbols from "./lib/rating";
import {
  interactiveRatingStars,
  interactiveRatingRectangles,
} from "./lib/utility";
import { fetchTeamsData, fetchBuddyData } from "./lib/data";
import { createJournalPage } from "./lib/create-journal";

if (document.querySelector("#codebuddy__container")) {
  fetchBuddyData();
  buddyHeader();
} else if (document.querySelector("#teams__container")) {
  fetchTeamsData();
} else if (document.querySelector("#dashboard__container")) {
  createDashboardPage();
} else if (document.querySelector("#journal__container")) {
  createJournalPage();
} else {
  journalFormDate();
  addSymbols();
  interactiveRatingStars();
  interactiveRatingRectangles();
  submitEntry();
}
