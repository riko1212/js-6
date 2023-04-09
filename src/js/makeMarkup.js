export const makeMarkup = data => {
  return data.map(el => {
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
};
