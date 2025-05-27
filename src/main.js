import './js/my-projects';
import './js/faq';
import './js/header';
import './js/reviews';
import './js/work-together';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.accordion-container');

const firstItem = document.querySelector('.ac:first-child');

firstItem.style.backgroundColor = 'rgba(0, 176, 104, 0.2)';
firstItem.style.borderRadius = '16px';

accordion.open(0);

let lastOpenedItem = firstItem;

const btnEl = document.querySelectorAll('.ac-trigger');
btnEl.forEach(element => {
    element.addEventListener('click', () => {
        const currentItem = element.closest('.ac');

        if (lastOpenedItem !== currentItem) {
            lastOpenedItem.style.backgroundColor = '';
            lastOpenedItem.style.borderRadius = '';
        }

        currentItem.style.backgroundColor = 'rgba(0, 176, 104, 0.2)';
        currentItem.style.borderRadius = '16px'; 

        lastOpenedItem = currentItem;
    });
});

const darkBtn = document.querySelector('.night-mode-checkbox');
const sections = document.querySelectorAll('section');

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  if (savedTheme === 'dark') {
    sections.forEach(section => {
      section.classList.add('dark-mode');
    });
    darkBtn.checked = true;
  }
}

darkBtn.addEventListener('change', event => {
  if (event.target.checked) {
    sections.forEach(section => {
      section.classList.add('dark-mode');
    });
    localStorage.setItem('theme', 'dark');
  } else {
    sections.forEach(section => {
      section.classList.remove('dark-mode');
    });
    localStorage.setItem('theme', 'light');
  }
});