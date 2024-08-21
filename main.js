document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-slider", {
    type: "loop",
    autoplay: true,
    interval: 2500,
    pagination: false,
  }).mount();
  new Splide("#flag-slider", {
    type: "loop",

    perPage: 9,
    breakpoints: {
      768: {
        perPage: 9,
      },
    },
  }).mount();
  const flagSlider = new Splide("#flag-slider", {
    type: "loop",
    autoplay: true,
    interval: 2500,
    pagination: false,
    arrows: false,
    perPage: 15,
    perMove: 1,
    gap: "40px",
  }).mount();
});
