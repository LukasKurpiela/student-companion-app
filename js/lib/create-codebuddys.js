import { createElement, createDate, findCurrentWeekDay } from "./utility";

export default function createBuddyPage(buddies) {
  const buddyContainer = document.querySelector("#codebuddy__container");
  buddies.forEach((team) => {
    const buddyCard = createElement(
      "section",
      ["buddy-card", "border__in--light"],
      buddyContainer
    );

    console.log(buddies);
    console.log(team);
    team.forEach((buddy, index) => {
      const firstBuddy = createElement(
        "p",
        ["buddy-card__item", "text__semi16--light"],
        buddyCard,
        buddy
      );
      if (index === 0) {
        const divider = createElement("span", ["buddy-card__line"], buddyCard);
        const plusSign = createElement("img", ["buddy-card__plus"], divider);
        plusSign.src = "../images/Plus.svg";
        plusSign.alt = "Plus Icon";
      }
    });
  });
}

export function buddyHeader() {
  const buddyHeader = document.querySelector("header");
  const headerDate = createElement(
    "p",
    ["text__regular12"],
    buddyHeader,
    createDate(findCurrentWeekDay())
  );
}
