// query select both inputs and sav btn
var saveBtn = document.querySelector('#save-btn');
var ideas = JSON.parse(localStorage.getItem('posts')) || [];
var cardClick = document.querySelector('.card-container');


console.log(cardClick);
console.log(ideas);

// event listener for save button that generates a new card and populates with inputs
// event listener will also save the data in local storage

saveBtn.addEventListener('click', createIdea)
cardClick.addEventListener('click', deleteIdea)
// deleteBtn.addEventListener('click', deleteFromStorage)
// create function to save inputs in local storage
function createIdea() {
  var title = document.querySelector('.title-style').value;
  var body = document.querySelector('.body-style').value;
  var newIdea = new Idea(title, body, Date.now());
  ideas.push(newIdea);
  newIdea.saveToStorage(ideas)
  publishIdea(newIdea);
  // console.log(newIdea.findTheId(1550189173276));
}                         

function deleteIdea(event) {
if(event.target.classList.contains('delete-button')) {
    var card = event.target.parentElement.parentElement;
    card.remove();
    var cardId = card.getAttribute('data-id');
    ideas[0].deleteFromStorage(cardId);
  }

loadPage (ideas)
// window.addEventListener('load', loadPage);
function loadPage (oldIdeas) {
  ideas = [];
   for (let i = 0; i < oldIdeas.length; i++) {
     var newIdea = new Idea(oldIdeas[i].title, oldIdeas[i].body, oldIdeas[i].cardId);
     ideas.push(newIdea);
     publishIdea(newIdea);
   }
   console.log(ideas);
}

function publishIdea(newIdeaObj) {
  var cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML += `<article id = "card-template" class="idea-card-style" data-id=${newIdeaObj.cardId}>
    <section class="card-style">
      <h2 id="card-title" class="card-title-style">${newIdeaObj.title}</h2>
      <p id="card-body">${newIdeaObj.body}</p>
    </section>
    <div class="card-box-style">
      <img id="downvote-btn" class="downvote" src="images/downvote.svg">
      <img id="upvote-btn" class="upvote" src="images/upvote.svg">
      <h3 class="quality-style">Quality: <span id="quality-qualifer">Swill
      </span></h3>
      <img id="delete-btn" class="delete-button" src="images/delete.svg">
    </div>
  </article>`
}



// create function to JSON the local storage inputs


// create function to generate card

// append card to the DOM

// idea card persists after
