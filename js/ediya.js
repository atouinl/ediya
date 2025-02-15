"use strict";
function sidemenu() {
  const moIcon = document.querySelector(".m_icon");
  const moxIcon = document.querySelector(".m_xicon");
  if (moIcon.style.display === "none") {
    moIcon.style.display = "block";
    moxIcon.style.display = "block";
  } else {
    moIcon.style.display = "none";
    moxIcon.style.display = "none";
  }
}

// 햄버거 버튼
const moIcon = document.querySelector(".m_icon");
// 모바일 전체메뉴
const mobile_wrap = document.querySelector(".mobile_wrap");
//x버튼
const m_xicon = document.querySelector(".m_xicon");

moIcon.onclick = function () {
  mobile_wrap.style.display = "flex";
};

m_xicon.onclick = function () {
  mobile_wrap.style.display = "none";
};

//왼쪽 이미지 드롭다운

//드롭다운 메뉴바 버튼(1개 이상이니까 All로 불러와야함)
var dropdown = document.querySelectorAll(".mobile_arrow");

//드롭다운 메뉴?컨텐츠내용(1개 이상이니까 All로 불러와야함)
var dropdownContent = document.querySelectorAll(".mobile_submenu");
// 아이콘 2개 업과 다운(1개 이상이니까 All로 불러와야함)
var drop_icon1 = document.querySelectorAll(".down");
var drop_icon2 = document.querySelectorAll(".up");

// 노드리스트는 객체처럼 생김
//요소(지정해줘야함), 인덱스 번호 불러옴
// 총 7개의 클래스가 반복되므로 인덱스 번호가 반복되어야 한다
dropdown.forEach(function (element, i) {
  element.addEventListener("click", function () {
    if (dropdownContent[i].style.display === "block") {
      dropdownContent[i].style.display = "none";
      drop_icon1[i].style.display = "inline-flex";
      drop_icon2[i].style.display = "none";
    } else {
      dropdownContent[i].style.display = "block";
      drop_icon1[i].style.display = "none";
      drop_icon2[i].style.display = "inline-flex";
    }
  });
});

//슬라이드
const main_swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".main_visual_prev",
    prevEl: ".main_visual_next",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const sec1_swiper1 = new Swiper(".sec1_swiper1", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.main_visual_prev',
  //   prevEl: '.main_visual_next',
  // },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
