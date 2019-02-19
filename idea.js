class Idea {
  constructor(title, body, cardId, quality = 'Swill') {
    this.title = title;
    this.body = body;
    this.quality = quality;
    this.cardId = cardId;
  }
  saveToStorage(array) {
    localStorage.setItem('posts', JSON.stringify(array));
  }

  updateContent() {
    var index = ideas.indexOf(this)
    ideas.splice(index, 1, this);
  }


  deleteFromStorage() {
    var index = ideas.indexOf(this)
    ideas.splice(index, 1);
    if (this === undefined) {
      ideas = [];
      localStorage.clear();
    } else {
      this.saveToStorage(ideas);
    }
  }

}
