export default class GifService {

  constructor(word, gifLimit = 5) {
    this.word = word;
    this.limit = gifLimit;
  }

  async getGifUrl() {
    const key = 'TKh5tHWvMv9hMpUeBBGg9JH5256fr7gr';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.word}&api_key=${key}&limit=${this.limit}`;
    const sadGif = 'https://media0.giphy.com/media/1BXa2alBjrCXC/200_s.gif';

    try {
      const response = await fetch(url);
      const dataObj = await response.json();
      if (dataObj.data.length) {
        return dataObj.data[0].images.fixed_height.url;
      } else {
        return sadGif;
      }
    } catch (error) {
      console.error(error);
      return sadGif;
    }
  }
}