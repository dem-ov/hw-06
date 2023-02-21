const list = document.querySelector(".gallery");

const markup = images
  .map(
    (image) =>
      `<li><img class="picture" src=${image.url} width = '400' alt='${image.alt}'></img></li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", markup);
const img = document.createElement("img");

const pictures = document.querySelectorAll(".picture");

list.style.display = "flex";
list.style.flexWrap = "column-reverse";
list.style.listStyle = "none";
list.style.gap = "20px";
list.style.justifyContent = "center";
