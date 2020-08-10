$(function () {


  let header = $("#header");
  let intro = $("#intro");
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");
  let navToogle = $("#navToogle");
  let slider = $("#commentsSlider");

  
  $(window).on("scroll load resize", function () {
    let introH = intro.innerHeight();


    scrollPos = $(this).scrollTop();


    if (introH < scrollPos) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });


  $("[data-scroll]").on("click", function (e) {


    e.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");
    navToogle.removeClass("bars-active");


    $("html , body").animate({
      scrollTop: elementOffset -70
    },700)

  });

 
  navToogle.on("click", function () {
    nav.toggleClass("show");
    navToogle.toggleClass("bars-active");
  });


  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  });

});
