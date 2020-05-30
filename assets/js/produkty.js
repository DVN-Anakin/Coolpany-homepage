$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 50});

  $(".box-feature-list li a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        window.location.hash = hash;
      });
    }
  });
});
