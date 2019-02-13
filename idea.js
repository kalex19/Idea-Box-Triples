class Idea {
  constructor(title, body, quality, cardId) {
    this.title = title;
    this.body = body;
    this.quality = quality;
    this.cardId = cardId;
  }
  saveToStorage() {
    var stringifyIdea = JSON.stringify(ideas);
    localStorage.setItem('post', Idea);
  }
}
