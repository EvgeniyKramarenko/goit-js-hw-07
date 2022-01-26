import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const cardsMarkyp = createImagesCardsMarkyp(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkyp)

galleryContainer.addEventListener('click', onPaletteContainerClick);

function createImagesCardsMarkyp(galleryItems) {
    return galleryItems.map(({original, preview, description }) => {
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
</div>`
    }).join('');
}

function onPaletteContainerClick(event) {
    event.preventDefault()
  const isImageSwatchEl = event.target.classList.contains('gallery__image');

  if (!isImageSwatchEl) {
    return;
  }
    
    const instance = basicLightbox.create(`<img src = "${event.target.dataset.source}">`);
  instance.show();
  console.log(instance);
  }

