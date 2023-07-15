const changeShowTag = (event) => {
  const targetTag = event.target.textContent;

  tags.forEach((tag) => {
    tag.classList.toggle("selected", tag.textContent === targetTag);
  });
};

const tags = document.querySelectorAll(".tag__item");

tags.forEach((tag) => {
  tag.addEventListener("click", changeShowTag);
});
