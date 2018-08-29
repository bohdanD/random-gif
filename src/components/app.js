import Word from './word';
import Gif from './gif';
import WordService from '../services/wordnik-api-service';
import GifService from '../services/gif-api-service';

export default class App {

  constructor() {
  }

  init(){
    new WordService().getWord()
      .then(word => {
        const wordComponent = new Word(word);
        wordComponent.render();
        return new GifService(word).getGifUrl();
      })
      .then(url => {
        const gifComponent = new Gif(url);
        gifComponent.render();
      });
  }
}