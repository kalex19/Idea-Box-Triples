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
  deleteFromStorage(array){
  localStorage.removeItem('posts', JSON.parse(array)); 
  }

findTheId(Id) {
var outOfStorage = JSON.parse(localStorage.getItem('posts'));
console.log(outOfStorage);
var indexOfStorage = outOfStorage.map(ideaObjects => ideaObjects.cardId).indexOf(Id);

console.log(indexOfStorage);
// }
  // updateContent(title, body) {
  //   localStorage.getItem ('post', JSON.parse('post'));
  //   console.log(localStorage.getItem('post'));
  

}

}
