// Імпорт бібліотеки Swiper та необхідних стилів
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const reviews = [
  {
    review: "Excellent work! The walls look brand new. The painters were neat, quick, and respectful.",
    author: "John Smith",
    avatar_url: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    review: "Professional team and very reliable. They showed up on time and completed the job within the agreed schedule.",
    author: "Emily Johnson",
    avatar_url: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    review: "They transformed my home with their attention to detail. I especially appreciated how they protected my furniture.",
    author: "Michael Brown",
    avatar_url: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    review: "Highly recommend for both interior and exterior painting. Great results, and they cleaned everything up afterwards.",
    author: "Sarah Wilson",
    avatar_url: "https://randomuser.me/api/portraits/women/4.jpg"
  }
];

/**
 * Функція створення HTML-розмітки для кожного елемента відгуку.
 * Повертає згенерований HTML, який буде вставлено в DOM.
 * 
 * @param {Array} data - масив об'єктів з відгуками
 * @returns {string} - HTML-розмітка
 */
function createMarkup(data) {
  return data.map(el =>
    `
    <div class="swiper-slide swiper-dark">
      <p class="text text-dark">${el.review}</p>
      <div class="author-container">
        <img src="${el.avatar_url}" alt="${el.author}">
        <h3 class="author author-dark">${el.author}</h3>
      </div>
    </div>
    `
  ).join('');
}


function initSwiper() {
  try {
    // Створюємо HTML на основі локального масиву відгуків
    const markup = createMarkup(reviews);

    // Знаходимо контейнер слайдера та вставляємо в нього розмітку
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = markup;
    const swiper = new Swiper('.swiper-container', {
      loop: false, // без безкінечної прокрутки
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 32
        }
      },
      centeredSlides: false,
      slidesPerView: 'auto',
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });

    // Слухаємо зміну слайду — оновлюємо вигляд кнопок навігації
    swiper.on('slideChange', function () {
      updateNavigationButtons(swiper);
    });

    // Початкове оновлення стану кнопок
    updateNavigationButtons(swiper);

  } catch (error) {
    // Якщо щось пішло не так — показуємо повідомлення про помилку
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong while initializing the slider.',
      position: 'topRight'
    });
  }
}

/**
 * Оновлює стан кнопок навігації в залежності від позиції слайдера.
 * Відключає "назад" на першому слайді та "вперед" на останньому.
 * 
 * @param {Swiper} swiper - об'єкт слайдера Swiper
 */
function updateNavigationButtons(swiper) {
  const { isBeginning, isEnd } = swiper;

  const prevButton = document.querySelector('.button-prev');
  const nextButton = document.querySelector('.button-next');
  const prevIcon = document.querySelector('.icon-prev');
  const nextIcon = document.querySelector('.icon-next');

  // Якщо перший слайд — вимкнути кнопку "назад"
  if (isBeginning) {
    prevButton.classList.add('swiper-button-disabled');
    prevIcon.classList.add('swiper-icon-disabled');
  } else {
    prevButton.classList.remove('swiper-button-disabled');
    prevIcon.classList.remove('swiper-icon-disabled');
  }

  // Якщо останній слайд — вимкнути кнопку "вперед"
  if (isEnd) {
    nextButton.classList.add('swiper-button-disabled');
    nextIcon.classList.add('swiper-icon-disabled');
  } else {
    nextButton.classList.remove('swiper-button-disabled');
    nextIcon.classList.remove('swiper-icon-disabled');
  }
}

document.addEventListener('DOMContentLoaded', initSwiper);
