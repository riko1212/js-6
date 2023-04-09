import axios from 'axios';

export class PixabyApi {
  #API_KEY = '34152906-82ee5ecd7f8cc2c72302ae1f5';
  #URL = 'https://pixabay.com/api/';
  constructor() {
    this.page = 1;
    this.query = '';
    this.per_page = 10;
  }
  fetchPhotoByQuery() {
    const searchParams = {
      q: this.query,
      image_type: 'photo',
      orientation: 'horisontal',
      safesearch: true,
      page: this.page,
      per_page: this.per_page,
      key: this.#API_KEY,
    };
    return axios.get(`${this.#URL}`, { params: searchParams });
  }
}
