const cross = document.querySelectorAll(".card-close");
cross.forEach((element) => {
  element.addEventListener("click", () => {
    element.parentNode.parentNode.remove();
  });
});

const heartIcons = document.querySelectorAll(".heart-icon");
heartIcons.forEach((heartIcon) => {
  heartIcon.addEventListener("click", () => {
    heartIcon.classList.toggle("blue-heart");
  });
});

const card = document.querySelectorAll(".card");
card.forEach((element) => {
  const markRead = element.querySelector(".card-select");
  element.addEventListener("click", () => {
    markRead.style.display = "block";
  });
});
