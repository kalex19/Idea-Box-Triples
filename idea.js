class Idea {
  constructor(title, body, quality, cardId) {
    this.title = title;
    this.body = body;
    this.quality = quality;
    this.cardId = cardId;
  }
  saveToStorage(array) {
    localStorage.setItem('post', JSON.stringify(array));
  }
}
