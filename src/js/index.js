import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const btnSearch = document.querySelector(".button");

btnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  const searchText = document.querySelector(".search-txt");
  fetch(`https://api.github.com/users/${searchText.value}/repos`)
    .then((resp) => resp.json())
    .then((resp) => {
      for (let repo of resp) {
        const { name, html_url } = repo;
        const {avatar_url} = repo.owner;
        const resultList = document.querySelector(".result__list--js");
        const avatar = document.querySelector('.result__img--js');
        const img = `<img src="${avatar_url}">`;
        const template = `<li>${name} <a href="${html_url}" title="github prpository link"> GitHub link</a></li>`;
        avatar.innerHTML = img;
        resultList.innerHTML += template;
      }
    })
    .catch((error) => {
      console.log("błąd pobierania");
    });
});
