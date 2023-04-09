import { PixabyApi } from './js/fetchPhotos';
import { makeMarkup } from './js/makeMarkup';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const pixabyApi = new PixabyApi();
const loadMoreByClick = async () => {
  pixabyApi.page += 1;
  try {
    const { data } = await pixabyApi.fetchPhotoByQuery();
    if (data.totalHits / pixabyApi.per_page > pixabyApi.page) {
      gallery.insertAdjacentHTML('beforeend', makeMarkup(data.hits).join(''));
    } else {
      gallery.insertAdjacentHTML('beforeend', makeMarkup(data.hits).join(''));
      loadMoreBtn.classList.add('is-hidden');
      loadMoreBtn.removeEventListener('click', loadMoreByClick);
    }
  } catch (err) {
    console.log(err);
  }
};

const fetchPhotosBySubmit = async e => {
  e.preventDefault();
  loadMoreBtn.addEventListener('click', loadMoreByClick);
  pixabyApi.query = e.currentTarget.elements.searchQuery.value;
  pixabyApi.page = 1;
  try {
    const { data } = await pixabyApi.fetchPhotoByQuery();
    if (data.totalHits === 0) {
      return;
    }
    if (data.totalHits / pixabyApi.per_page <= 1) {
      gallery.innerHTML = makeMarkup(data.hits).join('');
      return;
    }
    gallery.innerHTML = makeMarkup(data.hits).join('');
    loadMoreBtn.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
};

searchForm.addEventListener('submit', fetchPhotosBySubmit);
