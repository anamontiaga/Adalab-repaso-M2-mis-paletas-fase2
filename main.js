"use strict";

const paletteContainer = document.querySelector(".palettes");
const endpoint = "https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json";

function getPalettes() {
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      let paletteItem = "";
      // nuestro acumulador de paletas
      for (const item of data.palettes) {
        let itemColors = "";

        for (const color of item.colors) {
          itemColors += `<li class="palette__color" style="background-color:#${color}">#${color}</li>`;
        }

        paletteContainer.innerHTML += `
        <li class="palette">
          <h2 class="palette__name">${item.name}<small> (${item.from})</small></h2>
          <ul class="palette__colors">${itemColors}</ul>
        </li>
      `;
      }
    });
}

getPalettes();
