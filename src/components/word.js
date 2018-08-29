export default class Word {

  constructor(word) {
    this.element = document.querySelector('#word');
    this.word = word;
  }

  render() {
    const header = `
      <h1 id="header">${this.word}</h1>
    `;
    this.element.innerHTML = header;
  }

}