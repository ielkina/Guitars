"use strict";

var reviewsSwiper = document.querySelector(".swiper-pagination");

if (reviewsSwiper) {
  var swiper = new Swiper(".swiper-reviews", {
    loop: true,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true"
    }
  });
}