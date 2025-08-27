"use strict";
const thumbs = document.querySelector(".gallery__list");
const bigImg = document.querySelector(".gallery img");
thumbs.addEventListener("click", (e)=>{
    const link = e.target.closest("a.list-item__link");
    if (!link || !thumbs.contains(link)) return;
    e.preventDefault();
    bigImg.src = link.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
