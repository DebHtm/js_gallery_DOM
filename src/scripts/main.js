'use strict';

const thumbs = document.querySelectorAll('.list-item a');
const bigImg = document.querySelector('.gallery img');

thumbs.forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target.tagName === 'IMG') {
      target = target.parentElement;
    }

    if (target.tagName === 'A') {
      bigImg.src = target.href;
    }
  });
});
