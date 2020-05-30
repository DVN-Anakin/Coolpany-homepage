(function(){
  $('#clients-carousel').carousel({ interval: 2600 });
  $('body').css('padding-bottom', '300px');
}());

(function(){
  $('.carousel-showmanymoveone .item').each(function(){
    var itemToClone = $(this);
    for (var i=1;i<6;i++) {
      itemToClone = itemToClone.next();
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  });
}());

(function(){
  /*$(window).scroll(function() {
    if ($(this).scrollTop() > 500 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
  });*/
  $(function(){
    $(".scroll").click(function(){
      $("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");
      return false
    })
  });
}());
