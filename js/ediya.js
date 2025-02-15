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
