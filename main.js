//QUERY SELECTORS
var saveBtn = document.querySelector('#save-btn');
var ideas = JSON.parse(localStorage.getItem('posts')) || [];
var cardBtnClick = document.querySelector('.card-container');
var cardBodyClick = document.querySelector('.card-container');
var search = document.querySelector('.search-style');


//EVENT LISTENERS
saveBtn.addEventListener('click', createIdea)
cardBtnClick.addEventListener('click', buttonListener)
cardBodyClick.addEventListener('focusout', saveContent )
search.addEventListener('keyup', searchIdeas)




//FUNCTIONS
function createIdea() {
  var title = document.querySelector('.title-style').value;
  var body = document.querySelector('.body-style').value;
  var newIdea = new Idea(title, body, Date.now());
  ideas.push(newIdea);
  newIdea.saveToStorage(ideas)
  publishIdea(newIdea);
}

function publishIdea(newIdeaObj) {
  var cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML += `<article id="card-template" class="idea-card-style" data-id=${newIdeaObj.cardId}>
    <section class="card-style">
      <h2 id="card-title" class="card-title-style" contenteditable="true" data-title="card-title">${newIdeaObj.title}</h2>
      <p id="card-body" class="card-body-style" contenteditable="true" data-body="body-content">${newIdeaObj.body}</p>
    </section>
    <div class="card-box-style">
      <img id="downvote-btn" class="downvote" src="images/downvote.svg">
      <img id="upvote-btn" class="upvote" src="images/upvote.svg">
      <h3 class="quality-style">Quality: <span id="quality-qualifer">${newIdeaObj.quality}
      </span></h3>
      <img id="delete-btn" class="delete-button" src="images/delete.svg">
    </div>
  </article>`
}

loadPage (ideas)
// window.addEventListener('load', loadPage);
function loadPage (oldIdeas) {
  ideas = [];
  for (let i = 0; i < oldIdeas.length; i++) {
    console.log(oldIdeas[i].quality);
  var newIdea = new Idea(oldIdeas[i].title, oldIdeas[i].body, oldIdeas[i].cardId, oldIdeas[i].quality);
     ideas.push(newIdea);
     publishIdea(newIdea);
   }
}
function buttonListener(e) {
  if(e.target.classList.contains('delete-button')){
    deleteIdea(e);
  }
  if(e.target.classList.contains('upvote'))  {
    upVote(e);
  }
  if (e.target.classList.contains('downvote')){
    downVote(e);
  }
}

function deleteIdea(e) {
  var card = e.target.parentElement.parentElement;
    card.remove();
  var targetIdea = findIdea(e);
  targetIdea.deleteFromStorage();
}

function upVote(e)  {
    var quality = e.target.nextSibling.nextSibling.lastChild;
    var targetIdea = findIdea(e);
    if (quality.innerText === 'Swill') {
      quality.innerText = 'Plausible';
      targetIdea.updateQuality('Plausible');
    } else {
      quality.innerText = 'Genius';
      targetIdea.updateQuality('Genius');
    }
    targetIdea.saveToStorage(ideas);
}

function downVote(e){
  var quality = e.target.nextSibling.nextSibling.nextSibling.nextSibling.lastChild;
  var targetIdea = findIdea(e);
  if (quality.innerText === 'Genius'){
    quality.innerText = 'Plausible'
    targetIdea.updateQuality('Plausible');
  } else {
    quality.innerText = 'Swill'
    targetIdea.updateQuality('Swill');
  }

  targetIdea.saveToStorage(ideas);
}

function saveContent (e) {
  var element = e.target;
  var text = e.target.textContent;
  var targetIdea = findIdea(e);
  if (element.id === 'card-title') {
    targetIdea.title = text;
  }
  if (element.id === 'card-body') {
    targetIdea.body = text;
  }
  targetIdea.updateContent();
  targetIdea.saveToStorage(ideas);
}

function findIdea (e) {
  var card = e.target.parentElement.parentElement;
  var cardId = parseInt(card.getAttribute('data-id'));
  return ideas.find(function(idea) {
    return idea.cardId === cardId;
  });

}

function searchIdeas(e) {
  var currentSearch = e.target.value;
  var regex = new RegExp(currentSearch, 'i');
  console.log(regex);
  var ideaMatches = [];
  clearCards();
  for (let i = 0; i < ideas.length; i++) {
    if (regex.test(ideas[i].title) || regex.test(ideas[i].body)) {
      ideaMatches.push(ideas[i]);
      publishIdea(ideas[i]);
    }
  }
}

function clearCards() {
  var cardContainer = document.querySelector('.card-container');
  while (cardContainer.hasChildNodes()) {
    cardContainer.removeChild(cardContainer.lastChild);
  }
}
