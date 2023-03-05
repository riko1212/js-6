export class PixabyApi {
  #API_KEY = '34152906-82ee5ecd7f8cc2c72302ae1f5';
  #URL = 'https://pixabay.com/api/';
  constructor() {
    this.page = 1;
    this.query = '';
  }
  fetchPhotoByQuery() {
    const searchParams = new URLSearchParams({
      q: this.query,
      image_type: 'photo',
      orientation: 'horisontal',
      safesearch: true,
      page: this.page,
      per_page: 10,
      key: this.#API_KEY,
    });
    return fetch(`${this.#URL}?${searchParams}`).then(response => {
      if (!response.ok) {
        throw new Error(err);
      }
      return response.json();
    });
  }
}
