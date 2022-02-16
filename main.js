$(function () {
  $('.slider-owl').slick({
   slidesToShow: 4,
   slidesToScroll: 2,
   autoplay: true,
   autoplaySpeed: 3000,
   nextArrow:$('.next'),
   prevArrow:$('.prev'),
 });
 });

function togglepop(){
  document.getElementById("model").classList.toggle("active");

}
