export default class WordService {

  async getWord() {
    const url = 'http://api.wordnik.com/v4/words.json/randomWord?api_key=';
    const key = 'c23b746d074135dc9500c0a61300a3cb7647e53ec2b9b658e';
    const defaultWord = 'Default'; // :)

    try {
      const response = await fetch(url + key);
      const data = await response.json();
      return data.word;
    } catch (error) {
      console.error(error);
      return defaultWord;
    }
  }
}