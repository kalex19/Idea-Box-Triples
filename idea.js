class Idea {
  constructor(title, body, cardId) {
    this.title = title;
    this.body = body;
    this.quality = 'Swill';
    this.cardId = cardId;
  }
  saveToStorage(array) {
    localStorage.setItem('posts', JSON.stringify(array));
    // console.log(localStorage.getItem('post'));
  }
  // downloadFromStorage(newIdea) {
  //   var storedIdea = localStorage.getItem('ideas', JSON.parse(storedIdea));
  //   console.log('storedIdea');
  // }
  // updateContent(title, body) {
  //   localStorage.getItem ('post', JSON.parse('post'));
  //   console.log(localStorage.getItem('post'));
  // }
  // deleteFromStorage(array){
  //   localStorage.remove('post', JSON.parse(array));
  //
  // }
}
