const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets); 
  }
  
  getProphetData();
  function getAge(birthdate, deathdate) {
    const birth = new Date(birthdate);
    const death = deathdate ? new Date(deathdate) : new Date();
    const ageDiff = death - birth;
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');
  
    prophets.forEach((prophet) => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let portrait = document.createElement('img');
  
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      h3.innerHTML = `Date of Birth: ${prophet.birthdate}<br>Place of Birth: ${prophet.birthplace}<br>Age: ${getAge(prophet.birthdate, prophet.death)}<br>Years served: ${prophet.length}`;
  
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${prophet.order === 1 ? "st" : prophet.order === 2 ? "nd" : "th"} Latter-day President`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      card.appendChild(h2);
      card.appendChild(h3)
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); // end of forEach loop
  }; // end of function expression
  