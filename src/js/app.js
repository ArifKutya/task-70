window.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("boom")
  });
});
let body = document.querySelector('body')
let profile = document.createElement("div");
profile.classList.add('name')
let img = document.createElement("img")
img.setAttribute("src", "./images/favicon.ico")
img.classList.add('image')
profile.appendChild(img)
profile.appendChild(profile)

const image = document.querySelector('.image')
image.addEventListener('click', () => {
  image.style.transform = "scale(2)"
})
