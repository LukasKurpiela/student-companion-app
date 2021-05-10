import { createElement, createDate } from './utility';

export function journalFormDate() {
  const journalDate = document.querySelector('#journal__date');
  journalDate.innerHTML = createDate('TODAY');
}

const form = document.querySelector('form');
const submitButton = document.querySelector('.journal__save');
let journalEntries = loadFromLocalStorage() || [];

export function submitEntry() {
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const motto = form.motto.value;
    const notes = form.notes.value;
    addJournalEntry(motto, notes);
    form.reset();
    console.log(journalEntries);
  });
}

function addJournalEntry(motto, notes) {
  let newEntry = {
    id: 'd4bb0672-1225-11eb-adc1-0242ac120002',
    rating: 3,
    comprehension: 8,
    motto: motto,
    notes: notes,
  };
  journalEntries.push(newEntry);
  saveToLocalStorage(journalEntries);
  //postJournalEntry(newEntry);
}

function saveToLocalStorage(entry) {
  localStorage.setItem('Journal Entries', JSON.stringify(entry));
}

function loadFromLocalStorage() {
  try {
    const entriesFromLocalStorage = JSON.parse(
      localStorage.getItem('Journal Entries')
    );
    return entriesFromLocalStorage;
  } catch (error) {
    console.error(error.message);
  }
}

/* function postJournalEntry(entry) {
  fetch("https://muc-2020-w1-student-api.vercel.app/api/journals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry),
  })
    .then((res) => res.json())
    .then((entries) => console.log(entries));
} */
