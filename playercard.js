function populatePlayerCard(name, infoId, info, imgSrc, imgAlt, imgTitle) {
  // Clone the template to create a new player card
  const card = document.getElementById('playerCardTemplate').cloneNode(true);

  // Populate the cloned template with the provided data
  card.querySelector('.name').textContent = name;
  card.querySelector('.play-card-info').id = infoId;
  card.querySelector('.play-card-info').textContent = info;
  card.querySelector('img').src = imgSrc;
  card.querySelector('img').alt = imgAlt;
  card.querySelector('img').title = imgTitle;

  // Set the display to block (in case the template is set to 'display: none;')
  card.style.display = 'block';

  // Append the populated card to the playerCardsContainer
  document.getElementById('playerCardsContainer').appendChild(card);
}

function toggleCardInfo(cardId) {
  var cardInfo = document.getElementById(cardId); //sets card information Id and sets it to cardInfo variable
  cardInfo.style.display = (cardInfo.style.display === 'none' || cardInfo.style.display === '') ? 'block' : 'none'; //Makes the toggle aspect work by changing css display to block or none
}

document.getElementById('playerCardsContainer').addEventListener('click', function(event) {
  // Check if the clicked element or any of its parents have the class 'player-card'
  if (event.target.closest('.player-card')) {
    // If so, get the ID of the associated info paragraph and pass it to the toggleCardInfo function
    const infoId = event.target.closest('.player-card').querySelector('.play-card-info').id;
    toggleCardInfo(infoId);
  }
});







// Call the function to populate cards
populatePlayerCard(
  'Myles Garrett',
  'myles-garrett-info',
  "Myles Garrett, selected as the first overall pick by the Cleveland Browns in the 2017 NFL Draft, has established himself as a standout player in the league. He boasts two Pro Bowl selections in 2018 and 2020, with a starting role in 2020. In addition to these accolades, Garrett earned first-team All-Pro honors in 2020 and was recognized as a second-team All-Pro in 2018. His exceptional skills and contributions to the game also earned him a spot on the 2020 PFWA All-NFL team and the 2017 PFWA All-Rookie team, solidifying his status as a top-tier NFL talent.",
  'Pictures/mylesGarrett.png',
  'Myles Garrett',
  'Myles Garrett Celebrating'
);

populatePlayerCard(
  'Nick Chubb',
  'nick-chubb-info',
  "Nick Chubb, a second-round pick by the Cleveland Browns in the 2018 NFL Draft, has achieved great success in a short time. He earned consecutive Pro Bowl selections in 2019 and 2020, including a starting role in 2019. Chubb's talent has also earned him a spot on the 2019 and 2020 PFWA All-AFC teams, solidifying his status as a standout player in the league.",
  'Pictures/nickChubb.jpg',
  'Nick Chubb',
  'Nick Chubb running the ball'
);

populatePlayerCard(
  'Amari Cooper',
  'amari-cooper-info',
  "Drafted by the Oakland Raiders in 2015, the player transitioned to the Dallas Cowboys in 2018 before joining the Cleveland Browns in 2022. He earned four Pro Bowl nods and was recognized by the PFWA's All-Rookie team in 2015. With over 7,000 receiving yards and 45 touchdowns since 2015, he holds both NFL and college records. Hailing from Miami, he remains active in community outreach, including school and hospital visits.",
  'Pictures/amariCooper.jpg',
  'Amari Cooper',
  'Arami Cooper catching the ball'
);