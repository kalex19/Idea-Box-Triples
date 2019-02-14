class Idea {
  constructor(title, body, cardId) {
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

// findTheId(Id) {
// var outOfStorage = JSON.parse(localStorage.getItem('posts'));
// console.log(outOfStorage);
// // Idea.map('posts' => cardId)
// }
  // updateContent(title, body) {
  //   localStorage.getItem ('post', JSON.parse('post'));
  //   console.log(localStorage.getItem('post'));
  // }
 
  
  // }
}
