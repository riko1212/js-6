import { PixabyApi } from './js/fetchPhotos';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const pixabyApi = new PixabyApi();
const fetchPhotosBySubmit = e => {
  e.preventDefault();
  pixabyApi.query = e.currentTarget.elements.searchQuery.value;
  pixabyApi
    .fetchPhotoByQuery()
    .then(data => {
      const startView = data.hits.map(el => {
        return `<div class="photo-card">
        <img src="${el.previewURL}" width="${el.previewWidth}" height="${el.previewHeight}" alt=""  />
        <div class="info">
          <p class="info-item">
            <b>Likes ${el.likes}</b>
          </p>
          <p class="info-item">
            <b>Views${el.views}</b>
          </p>
          <p class="info-item">
            <b>Comments${el.comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads${el.downloads}</b>
          </p>
        </div>
      </div>
          `;
      });
      gallery.innerHTML = startView.join('');
    })
    .catch(err => {
      console.log(err);
    });
};

loadMoreByClick = e => {
  pixabyApi.page += 1;

  // pixabyApi.query = e.currentTarget.elements.searchQuery.value;
  pixabyApi
    .fetchPhotoByQuery()
    .then(data => {
      const startView = data.hits.map(el => {
        return `<div class="photo-card">
            <img src="${el.previewURL}" width="${el.previewWidth}" height="${el.previewHeight}" alt=""  />
            <div class="info">
              <p class="info-item">
                <b>Likes ${el.likes}</b>
              </p>
              <p class="info-item">
                <b>Views${el.views}</b>
              </p>
              <p class="info-item">
                <b>Comments${el.comments}</b>
              </p>
              <p class="info-item">
                <b>Downloads${el.downloads}</b>
              </p>
            </div>
          </div>
              `;
      });
      gallery.insertAdjacentHTML('beforeend', startView.join(''));
    })
    .catch(err => {
      console.log(err);
    });
};

searchForm.addEventListener('submit', fetchPhotosBySubmit);
loadMoreBtn.addEventListener('click', loadMoreByClick);
