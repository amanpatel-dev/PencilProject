
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[650,1],
        pagination: true,
        autoPlay:true
    });
});


  AOS.init();
  var app = document.getElementById('hero-text-type');

  var typewriter = new Typewriter(app, {
      loop: true
  });
  
  typewriter.typeString('Doubts')
      .pauseFor(1500)
      .deleteAll()
      .typeString('Needs')
      .pauseFor(1500)
      .deleteAll()
      .typeString('Query')
      .pauseFor(1500)
      .start();