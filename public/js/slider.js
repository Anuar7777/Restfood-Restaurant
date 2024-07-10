let prevArrow = document.getElementById("prev-slide");
let nextArrow = document.getElementById("next-slide");

$(".home__slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: prevArrow,
  nextArrow: nextArrow,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
