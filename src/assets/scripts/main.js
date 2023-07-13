// Description: Main javascript file for the project

// Scroll Events: 상단 메뉴바 스크롤 이벤트
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const navbarList = navbar.querySelector(".navbar__list");
  const navbarLogoSubText = navbar.querySelector(".navbar__logo-text--sub");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    navbarList.classList.add("scrolled");
    navbarLogoSubText.classList.add("scrolled");
    console.log(navbarList);
  } else {
    navbar.classList.remove("scrolled");
    navbarList.classList.remove("scrolled");
    navbarLogoSubText.classList.remove("scrolled");
  }
});

// Window Resize Events: 가로 크기에 따라 font-size 조절
window.addEventListener("resize", function () {
  // 가로 크기에 따라 font-size 조절
  var windowWidth = window.innerWidth;

  if (windowWidth >= 1024) {
    document.body.style.fontSize = "16px"; // 가로 크기가 1024px 이상일 때
  } else if (windowWidth >= 768) {
    document.body.style.fontSize = "14px"; // 가로 크기가 768px 이상일 때
  } else {
    document.body.style.fontSize = "12px"; // 가로 크기가 767px 이하일 때
  }
});

// 초기 로드 시에도 font-size 설정 적용
window.dispatchEvent(new Event("resize"));
