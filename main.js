//QUERY SELECTORS
var saveBtn = document.querySelector('#save-btn');
var ideas = JSON.parse(localStorage.getItem('posts')) || [];
var cardBtnClick = document.querySelector('.card-container');
var cardBodyClick = document.querySelector('.card-container');
var search = document.querySelector('.search-style');
var swillBtn = document.querySelector('.swill-btn');
var plausBtn = document.querySelector('.plaus-btn');
var geniusBtn = document.querySelector('.genius-btn');
var showAllBtn = document.querySelector('.show-all-btn');
var showMoreBtn = document.querySelector('.show-more-btn');
var showLessBtn = document.querySelector('.show-less-btn');
var ideaCount = 10;

//EVENT LISTENERS
saveBtn.addEventListener('click', createIdea)
cardBtnClick.addEventListener('click', cardButtonListener);
cardBodyClick.addEventListener('focusout', saveContent);
search.addEventListener('keyup', searchIdeas)
swillBtn.addEventListener('click', searchSwill);
plausBtn.addEventListener('click', searchPlaus);
geniusBtn.addEventListener('click', searchGenius);
showAllBtn.addEventListener('click', showAllButton);
showMoreBtn.addEventListener('click', showMoreButton);
showLessBtn.addEventListener('click', showLessButton);



//FUNCTIONS
loadPage(ideas);

function loadPage(oldIdeas) {
  ideas = [];
  for (let i = 0; i < oldIdeas.length; i++) {
  var newIdea = new Idea(oldIdeas[i].title, oldIdeas[i].body, oldIdeas[i].cardId, oldIdeas[i].quality);
    ideas.push(newIdea);
    publishIdea(newIdea);
  }
}

function createIdea() {
  var title = document.querySelector('.title-style').value;
  var body = document.querySelector('.body-style').value;
  var newIdea = new Idea(title, body, Date.now());
  ideas.push(newIdea);
  newIdea.saveToStorage(ideas)
  publishIdea(newIdea);
  clearFields();
}

function publishIdea(newIdeaObj) {
  var cardContainer = document.querySelector('.card-container');
  if (cardContainer.children.length >= ideaCount) {
    return;
  }

  var text = `<article id="card-template" class="idea-card-style" data-id=${newIdeaObj.cardId}>
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
  cardContainer.insertAdjacentHTML('afterbegin', text);
}

function cardButtonListener(e) {
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

function clearFields() {
  var title = document.querySelector('.title-style');
  var body = document.querySelector('.body-style');
  title.value = '';
  body.value = '';
}

function deleteIdea(e) {
  var card = e.target.parentElement.parentElement;
    card.remove();
  var targetIdea = findIdea(e);
  console.log(card, targetIdea);
  targetIdea.deleteFromStorage();
  console.log("hello")
}

function upVote(e) {
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

function downVote(e) {
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
  var ideaMatches = [];
  clearCards();
  for (let i = 0; i < ideas.length; i++) {
    if (regex.test(ideas[i].title) || regex.test(ideas[i].body) || regex.test(ideas[i].quality)) {
      ideaMatches.push(ideas[i]);
      publishIdea(ideas[i]);
    }
  }
}

function searchSwill(e) {
  var filter = swillBtn.value;
  var regex = new RegExp(filter, 'i');
  var ideaMatches = [];
  clearCards();
  for (let i = 0; i < ideas.length; i++) {
    if (regex.test(ideas[i].quality)) {
      ideaMatches.push(ideas[i]);
      publishIdea(ideas[i]);
    }
  }
}

function searchPlaus(e) {
  var filter = plausBtn.value;
  var regex = new RegExp(filter, 'i');
  var ideaMatches = [];
  clearCards();
  for (let i = 0; i < ideas.length; i++) {
    if (regex.test(ideas[i].quality)) {
      ideaMatches.push(ideas[i]);
      publishIdea(ideas[i]);
    }
  }
}

function searchGenius(e) {
 var filter = geniusBtn.value;
  var regex = new RegExp(filter, 'i');
  var ideaMatches = [];
  clearCards();
  for (let i = 0; i < ideas.length; i++) {
      if (regex.test(ideas[i].quality)) {
      ideaMatches.push(ideas[i]);
      publishIdea(ideas[i]);
    }
  }
}

function showAllButton(e) {
  var show = showAllBtn.value;
   var regex = new RegExp(show, 'i');
   var ideaMatches = [];
   clearCards();
   for (let i = 0; i < ideas.length; i++) {
     if (regex.test(ideas[i].title) || regex.test(ideas[i].body) || regex.test(ideas[i].quality)) {
       ideaMatches.push(ideas[i]);
       publishIdea(ideas[i]);
     }
   }
}

function showMoreButton() {
  showMoreBtn.classList.add('hide-me');
  showLessBtn.classList.remove('hide-me');
  clearCards();
  ideaCount = 50;
  for (let i = 0; i < ideas.length; i++) {
    publishIdea(ideas[i]);
  }
}

function showLessButton() {
  showLessBtn.classList.add('hide-me');
  showMoreBtn.classList.remove('hide-me');
  clearCards();
  ideaCount = 10;
  for (let i = 0; i < ideas.length; i++) {
    publishIdea(ideas[i]);
  }
}

function disableButtons(e){
  var disabled = e.preventDefault();
}

function clearCards() {
  var cardContainer = document.querySelector('.card-container');
  while (cardContainer.hasChildNodes()) {
  cardContainer.removeChild(cardContainer.lastChild);
  }
}
