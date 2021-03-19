
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

$( document ).ready(function() {

    function openSidebar() {
      $(".cont-rght-side-fixed").toggleClass("open");
    }

    $(".cont-side-fixed-bg, .queries-btn, .cont-rght-side-fixed .cont-btn, .mob-nav, .close-nav").click(function(){
        openSidebar();
      });

      $(".sidebar ul.nav li:first-child").click(function(){
        $(".sidebar ul.nav li:first-child i").toggleClass("icon-long-arrow-left icon-navigation");
        $(".wrapper").toggleClass("active");
      });

      $(".main .card").hover(function() {
        $(".main .card").not(this).addClass("hover-effect");
      }, function() {
        $(".main .card").removeClass("hover-effect");
      });

});


function customFile() {
  $('input[type="file"]').change(function(e){
      var fileName = e. target. files[0]. name;
      $(this).siblings('.form-control').val(fileName);
  });
}

$( document ).ready(function() {
  $( ".fileBrowseCustom label" ).on( "click", customFile );
});



$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});


$('.owl-carousel').owlCarousel({
  // loop: true,
  margin:15,
  stagePadding: 15,
  nav: true,
  autoWidth:true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  autoplay: false,
  responsiveClass:true,
  autoplayHoverPause: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1300: {
      items: 4
    }
  },
});