import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('.gallery');

const renderImg = () => {
  const markup = galleryItems
    .map(
      item => ` <div class='gallery__item'>
        <a class='gallery__link' href='${item.original}'>
          <img
            class='gallery__image'
            src='${item.preview}'
            data-source='${item.original}'
            alt='${item.description}'
          />
        </a>
      </div>`,
    )
    .join('');

  galleryList.insertAdjacentHTML('beforeend', markup);
};
renderImg();

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

