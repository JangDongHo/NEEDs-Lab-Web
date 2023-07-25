// Assuming 'wr_id' is a query parameter with the gallery ID, you can get it like this:
const params = new URLSearchParams(window.location.search);
const galleryId = params.get("title");
const galleryContainer = document.querySelector(".gallery__list-container");
const boardContainer = document.querySelector(".board__list-container");

// 갤러리
if (galleryId) {
  boardContainer.style.display = "block";
  galleryContainer.style.display = "none";
}
// 갤러리 리스트
else {
  const galleryLists = galleryContainer.querySelectorAll(".gallery__list");

  // 클릭 이벤트 핸들러
  galleryLists.forEach((galleryList) => {
    galleryList.addEventListener("click", (e) => {
      const targetGalleryList = e.target.closest(".gallery__list");
      const titleElement = targetGalleryList.querySelector(".gallery__list__title");
      const title = titleElement.innerText.replace(/\s+/g, "-");

      // 클릭한 게시글의 wr_id를 가지고 detail 페이지로 이동
      targetGalleryList.href = `./gallery?title=${title}`;
    });
  });
}
