'use strict';
// 햄버거 버튼
const moIcon = document.querySelector('.m_icon');
// 모바일 전체메뉴
const mobile_wrap = document.querySelector('.mobile_wrap');
//x버튼
const m_xicon = document.querySelector('.m_xicon');

moIcon.onclick = function () {
  mobile_wrap.style.display = 'flex';
};

m_xicon.onclick = function () {
  mobile_wrap.style.display = 'none';
};

//왼쪽 이미지 드롭다운

//드롭다운 메뉴바 버튼
var dropdown = document.querySelector('.mobile_arrow');
//드롭다운 메뉴?컨텐츠내용
var dropdownContent = document.querySelector('.mobile_submenu');
// 아이콘 2개 업과 다운
var drop_icon1 = document.querySelector('.down');
var drop_icon2 = document.querySelector('.up');

dropdown.addEventListener('click', function () {
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
    drop_icon1.style.display = 'flex';
    drop_icon2.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
    drop_icon1.style.display = 'none';
    drop_icon2.style.display = 'flex';
  }
});

//슬라이드
const main_swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.main_visual_prev',
    prevEl: '.main_visual_next',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const sec1_swiper1 = new Swiper('.sec1_swiper1', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.main_visual_prev',
  //   prevEl: '.main_visual_next',
  // },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
