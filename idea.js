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

  updateContent(element, text) {
    if (element.id === 'card-title') {
      this.title = text;
    }
    if (element.id === 'card-body') {
      this.body = text;
    }
    var index = ideas.indexOf(this)
    ideas.splice(index, 1);
    // localStorage.getItem('posts', JSON.parse(cardId));
    console.log(cardId, titleText, bodyText);
  }


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
}
