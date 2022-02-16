$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:4
      },
      1000:{
          items:7
      }
  }
})




function togglepop(){
    document.getElementById("model").classList.toggle("active");
  
  }
