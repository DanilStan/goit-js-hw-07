import { galleryItems } from './gallery-items.js';
// Change code below this line

const allColection = document.querySelector('.gallery');
const createImagesColectionToHtml = createImagesColection(galleryItems);

allColection.insertAdjacentHTML('beforeend', createImagesColectionToHtml);

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

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */
