function populateTeamPics(imgSrc, imgAlt, imgTitle, desription, credit){
  //clone template
  const card = document.getElementById('teamPicsTemplate').cloneNode(true);

  //Populates info
  card.querySelector('img').src = imgSrc;
  card.querySelector('img').alt = imgAlt;
  card.querySelector('img').title = imgTitle;
  card.querySelector('.image-description').textContent = desription;
  card.querySelector('.image-credit').textContent = credit;

  //displays the cloned card
  card.style.display = 'block';

  document.getElementById('teamPicsContainer').appendChild(card);
}

populateTeamPics(
  'teamPicsImages/defenceTeam.jpg',
  'Browns Defence celebrating',
  'Week 1 Defence celebration',
  "Defensive end Myles Garrett (95) Defensive end Za'Darius Smith (99) Linebacker Anthony Walker (5) during a NFL football game between the Cincinnati Bengals and Cleveland Browns.",
  "Taken by: Doug Beigie/Cleveland Browns"
);

populateTeamPics(
  'teamPicsImages/defenceCelebratingWeek2.jpg',
  'Browns defence celebrating after a turnover',
  'Week 2 defence dancing',
  "Browns defense celebrating a turnover together during a NFL football game between the Cleveland Browns and Pittsburgh Steelers.",
  "Taken by: Matt Starkey/Cleveland Browns"
);

populateTeamPics(
  'teamPicsImages/jeromeFordTouchdownWeek3.jpg',
  'Jerome Ford reaching out and scoring a touchdown',
  'Week 3 Jerome Ford touchdown dive',
  "Running back Jerome Ford (34) reaches out for a touchdown during a NFL football game between the Tennessee Titans and Cleveland Browns.",
  "Taken by: Chris Kim/Cleveland Browns"
);

populateTeamPics(
  'teamPicsImages/defensiveBacksWeek4.jpg',
  'Browns Defensive Backs before their game',
  'Week 4 defensive backs pregame',
  "Safety Juan Thornhill (1) and the defensive backs before a NFL football game between the Baltimore Ravens and Cleveland Browns.",
  "Taken by: Matt Starkey/Cleveland Browns"
);