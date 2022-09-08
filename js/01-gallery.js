import { galleryItems } from './gallery-items.js';
// Change code below this line

const allColection = document.querySelector('.gallery');
const createImagesColectionToHtml = createImagesColection(galleryItems);

allColection.insertAdjacentHTML('beforeend', createImagesColectionToHtml);
allColection.addEventListener('click', onClickImage);

//  Формуємо HTML
function createImagesColection(values) {
  return values
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    })
    .join('');
}

// Реалізовуємо основний функціонал
function onClickImage(e) {
  onDefaultSettings(e);
  onClickToImage(e);
  openAndCloseModal(e);
}

// Скидаємо стилі
function onDefaultSettings(e) {
  e.preventDefault();
}

// Перевіряємо чи користувач натиснув саме на картинку
function onClickToImage(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
}

// Відкриття та закриття модального  вікна
function openAndCloseModal(e) {
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  allColection.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}
