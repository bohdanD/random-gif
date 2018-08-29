export default class Gif {

  constructor(url) {
    this.element = document.querySelector('#img');
    this.url = url;
  }

  render() {
    const img = `
      <image id="gif" src="${this.url}" />
    `;
    this.element.innerHTML = img;
  }
}