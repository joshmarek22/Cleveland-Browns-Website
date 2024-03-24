function populateNews(headline, imgSrc, imgAlt, imgTitle, info, linkPlaceholder) {
//clones template
const card = document.getElementById('newsTemplate').cloneNode(true);
const linkElement = card.querySelector('#news-Link');

//populates information
card.querySelector('.news-headline').textContent = headline;
card.querySelector('img').src = imgSrc;
card.querySelector('img').alt = imgAlt;
card.querySelector('img').title = imgTitle;
card.querySelector('.news-info').textContent = info;
linkElement.setAttribute('href', linkPlaceholder);


//displays cloned card
card.style.display = 'block';

document.getElementById('newsContainer').appendChild(card);
}

populateNews(
  "Browns 2022 Draft Picks Grades in Year 2",
  'Pictures/martinEmersonJr.jpg',
  'Martin Emerson Jr.',
  'Martin Emerson Jr. celebrating',
  "The 2022 draft class has been a rollercoaster in more ways than one. The Browns had nine picks in total, but beginning in the third round. Out of the nine selections, only four remain on the active roster while seventh round pick Isaiah Thomas is on the Browns’ practice squad. Sixth round pick Michael Woods II is out for the season with an Achilles injury. ",
  "https://brownswire.usatoday.com/lists/browns-martin-emerson-jr-2022-nfl-draft-review/ "
)

populateNews(
  "Nick Chubb underwent successful knee surgery",
  'Pictures/nickChubb.jpg',
  'Nick Chubb',
  'Nick Chubb running the ball',
  "Browns running back Nick Chubb underwent successful knee surgery to repair ligament damage sustained in the September 18th game against the Steelers in Pittsburgh. ",
  "https://www.clevelandbrowns.com/news/browns-announce-nick-chubb-underwent-successful-knee-surgery "
)

populateNews(
  "Browns collapse in final minutes of Sunday's game in Seattle",
  'Pictures/brownsVsSeahawks.jpg',
  'JSN scoring game winning touchdown for Seattle',
  'JSN scoring game winning touchdown for Seattle',
  "The Browns had some great moments in Sunday's Week 8 matchup against the Seahawks but didn't finish the job. They lost 24-20 after a late-game interception gave the Seahawks the ball back with 1:57 left in the game, which set up a five-play, 52-yard touchdown drive for Seattle. ",
  "https://www.clevelandbrowns.com/news/browns-collapse-in-final-minutes-vs-seahawks"
)

populateNews(
  "CB Denzel Ward locks down WR Marquise Brown and delivers another elite performance",
  'Pictures/denzelWardandHollywoodBrown.png',
  'Denzel Ward Covering Marquise Brown',
  'Denzel Ward Covering Marquise Brown',
  "CB Denzel Ward had one of his best performances this season against the Cardinals at Cleveland Browns Stadium. The two-time pro bowler completely shut down the Cardinals' best wide receiver, Marquise Brown.",
  "https://www.clevelandbrowns.com/news/denzel-ward-won-marquise-brown-matchup"
)

populateNews(
  "QB Deshaun Watson is out for the season",
  'Pictures/deshaunWatson.webp',
  'Deshaun Watson pic',
  'Deshaun Watson pic',
  "Deshaun Watson underwent magnetic resonance imaging (MRI) Monday on two injuries sustained on different plays in the first half of Sunday's 33-31 win over the Baltimore Ravens. Imaging on his left ankle revealed a high-ankle sprain. In addition, postgame, Deshaun notified our medical staff of a new discomfort in his right shoulder that he felt after a hit in the first half. An MRI of his right shoulder revealed a displaced fracture to the glenoid.",
  "https://www.clevelandbrowns.com/news/browns-announce-qb-deshaun-watson-is-out-for-the-season"
)

populateNews(
  "Browns offensive line had one of their best games of the season against the Steelers",
  'Pictures/dwandJonesBlocking.jpg',
  'Dwand Jones blocking',
  'Dwand Jones going to block Pittsburgh player',
  "The offensive line showed they meant business when they arguably had Sunday's best game of the season. The offensive line allowed only one sack, marking the second game this season they didn't allow double-digit sacks.",
  "https://www.clevelandbrowns.com/news/browns-offensive-line-performance-against-steelers"
)