//QUERY SELECTORS
var saveBtn = document.querySelector('#save-btn');
var ideas = JSON.parse(localStorage.getItem('posts')) || [];
var cardBtnClick = document.querySelector('.card-container');
var cardBodyClick = document.querySelector('.card-container');



//EVENT LISTENERS
saveBtn.addEventListener('click', createIdea)
cardBtnClick.addEventListener('click', buttonListener)
cardBodyClick.addEventListener('click', cardListener)




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
  cardContainer.innerHTML += `<article id = "card-template" class="idea-card-style" data-id=${newIdeaObj.cardId}>
    <section class="card-style">
      <h2 id="card-title" class="card-title-style" contenteditable="true" >${newIdeaObj.title}</h2>
      <p id="card-body" class="card-body-style" contenteditable="true">${newIdeaObj.body}</p>
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

loadPage (ideas)
// window.addEventListener('load', loadPage);
function loadPage (oldIdeas) {
  ideas = [];
  for (let i = 0; i < oldIdeas.length; i++) {
  var newIdea = new Idea(oldIdeas[i].title, oldIdeas[i].body, oldIdeas[i].cardId);
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
  var cardId = card.getAttribute('data-id');
    ideas[0].deleteFromStorage(cardId);
}

function upVote(e)  {
    var quality = e.target.nextSibling.nextSibling.lastChild;
    if (quality.innerText === 'Swill') {
      quality.innerText = 'Plausible'
    } else {
      quality.innerText = 'Genius'
    }
}

function downVote(e){
  var quality = e.target.nextSibling.nextSibling.nextSibling.nextSibling.lastChild;
  if (quality.innerText === 'Genius'){
    quality.innerText = 'Plausible'
  } else {
    quality.innerText = 'Swill'
  }
}

function cardListener (e) {
  if(e.target.classList.contains('card-title-style')){
    editTitle(e);
  }
  if(e.target.classList.contains('card-body-style-')){
    editBody(e);
  }
  else {
    mainListener(e);
  }
}

function editTitle (e) {

}

function editBody(e) {
  var body = document.getElementById('card-body');
  var edit = body.innerHTML;
}

function mainListener(e) {
  var cardBodyClick = document.querySelector('.card-container');
  var title = document.getElementById('card-title').innerHTML;
  var body = document.getElementById('card-body').innerHTML;
  var newIdea = new Idea(title, body, Date.now());
  // newIdea.updateContent(ideas);
  console.log(newIdea)
  console.log(title)

}
