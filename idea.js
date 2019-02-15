class Idea {
  constructor(title, body, cardId, quality) {
    this.title = title;
    this.body = body;
    this.quality = 'Swill';
    this.cardId = cardId;
  }
  saveToStorage(array) {
    localStorage.setItem('posts', JSON.stringify(array));
  }


findTheId(Id) {
var outOfStorage = JSON.parse(localStorage.getItem('posts'));
// console.log(outOfStorage);




// var indexOfStorage = outOfStorage.indexOf(val => newIdeaObj.dataset.cardId);
// console.log(indexOfStorage)

// var spliceByIndex = indexOfStorage.splice();

// console.log(spliceByIndex);
}


// console.log(indexOfStorage);
// }

deleteFromStorage(cardId) {
 var targetIdea = ideas.find(function(idea) {
  idea.id === cardId
 })
 var index = ideas.indexOf(targetIdea)
 ideas.splice(index, 1);
 if (targetIdea === undefined) {
  ideas = [];
  localStorage.clear();
 } else {
   targetIdea.saveToStorage(ideas);
 }
 

}




  // updateContent(title, body) {
  //   localStorage.getItem ('post', JSON.parse('post'));
  //   console.log(localStorage.getItem('post'));
  

}
