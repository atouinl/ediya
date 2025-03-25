'use strict';

AOS.init();

function sidemenu() {
  const moIcon = document.querySelector('.m_icon');
  const moxIcon = document.querySelector('.m_xicon');
  if (moIcon.style.display === 'none') {
    moIcon.style.display = 'block';
    moxIcon.style.display = 'block';
  } else {
    moIcon.style.display = 'none';
    moxIcon.style.display = 'none';
  }
}
// 햄버거 버튼
const moIcon = document.querySelector('.m_icon');
// 모바일 전체메뉴
const mobile_wrap = document.querySelector('.mobile_wrap');
//x버튼
const m_xicon = document.querySelector('.m_xicon');

// moIcon.addEventListener("click", () => {
// mobile_wrap.style.display = "flex";
// });
// m_xicon.addEventListener("click", () => {
// mobile_wrap.style.display = "none";
// });

moIcon.onclick = function () {
  mobile_wrap.style.display = 'flex';
};

m_xicon.onclick = function () {
  mobile_wrap.style.display = 'none';
};

//왼쪽 이미지 드롭다운

//드롭다운 메뉴바 버튼(1개 이상이니까 All로 불러와야함)
var dropdown = document.querySelectorAll('.mobile_arrow');

//드롭다운 메뉴?컨텐츠내용(1개 이상이니까 All로 불러와야함)
var dropdownContent = document.querySelectorAll('.mobile_submenu');
// 아이콘 2개 업과 다운(1개 이상이니까 All로 불러와야함)
var drop_icon1 = document.querySelectorAll('.down');
var drop_icon2 = document.querySelectorAll('.up');

// 노드리스트는 객체처럼 생김
//요소(지정해줘야함), 인덱스 번호 불러옴
// 총 7개의 클래스가 반복되므로 인덱스 번호가 반복되어야 한다
dropdown.forEach(function (element, i) {
  element.addEventListener('click', function () {
    if (dropdownContent[i].style.display === 'block') {
      dropdownContent[i].style.display = 'none';
      drop_icon1[i].style.display = 'inline-flex';
      drop_icon2[i].style.display = 'none';
    } else {
      dropdownContent[i].style.display = 'block';
      drop_icon1[i].style.display = 'none';
      drop_icon2[i].style.display = 'inline-flex';
    }
  });
});

//슬라이드
let slides = document.querySelectorAll('.swiper-slide p');
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3, //레이아웃 뷰 개수
  slidesPerGroup: 1, //한번에 슬라이딩될 개수
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  autoplay: {
    delay: 3000, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  scrollbar: {
    el: 'swiper-slide',
    draggable: true,
    dragSize: 20,
  },

  // 메인에서 글자를 왼쪽에서 오른쪽으로 이동하게 함
  on: {
    activeIndexChange: function () {
      slides[this.realIndex].style.left = 0;
      slides[this.realIndex].style.opacity = 1;
      slides[this.realIndex].style.transition = '0.5s';
    },
  },
});
