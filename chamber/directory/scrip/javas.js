
const url = 'jsonfile/data.json';
async function getData() {
    const response = await fetch(source);
    const data = await response.json();
    displayGrid(data.banks);
}

async function getBankData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.banks);  
    displayBanks(data.banks); 
  }
  
  getBankData();
  function getAge(direccion, deathdate) {
}
  

const displayBanks = (banks) => {
    const cards = document.querySelector('div.cards');
  
    banks.forEach((bank) => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let portrait = document.createElement('img');
  
      h2.textContent = `${bank.name} ${bank.ciudad}`;
      h3.innerHTML = `You can find us: ${bank.direccion}<br>Phone Number: ${bank.phone}<br>PO Number: ${bank.po}<br>Years Serving You: ${bank.length}<br> Membership Level: ${bank.membership}`;
      
      portrait.setAttribute('src', bank.imageurl);
      
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      card.appendChild(h2);
      card.appendChild(h3)
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); 
  };  
  


  

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("list");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}



const list
=document.querySelector(".list");
const grid
=document.querySelector("grid");
const ltg
=document.querySelector(".ltg");

list.addEventListener("click", () => { 
  ltg.classList.add("list") 
})

grid.addEventListener("click", () => {
  ltg.classList.remove ("list");
})

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

