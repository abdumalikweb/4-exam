$(".sajid-1 ").owlCarousel({
  loop: true,
  margin: 10,
  // nav: true,
  // dots: false,
  responsive: {
    0: {
      items: 1,
    },
    450: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
