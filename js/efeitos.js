$(document).ready(function(){

    $("#logotipo").on("mouseover",function(){

      $("#banner h1").addClass("efeito");

    }).on("mouseout", function(){

     $("#banner h1").removeClass("efeito");

    });

    $("#input-search").on("focus", function(){  

     $("li.search").addClass("ativo");

    }).on("blur", function(){

     $("li.search").removeClass("ativo");				
 
    });

    $(".thumbnails").owlCarousel({
     responsiveClass:true,
     loop:true,
     margin: 10,
         //nav:true,
         //navText: ["Anterior","Próximo"],
     responsive:{
     0 :{
             items: 1
     },
     480:{
             items:3
     },
     1000:{
             items:4
         }
     }
    });

    $("#logotipo").on("mouseover",function(){
    
      $("#banner h1").addClass("efeito");

    }).on("mouseout", function(){

     $("#banner h1").removeClass("efeito");

    });

     $("#input-search").on("focus", function(){

     $("li.search").addClass("ativo");

    }).on("blur", function(){

     $("li.search").removeClass("ativo");				

    });

     $(".thumbnails").owlCarousel({
      loop:true,
      margin: 10,
      responsive:{
      0 :{
        items: 1
        },
      600:{
        items:3
       },
      1000:{
        items:4
       },
        }
    });

      var owl = $('.Noticia');
      owl.owlCarousel();

      $('.customNextBtn').click(function() {
        owl.trigger('next.owl');

    });

      $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl');

    });

     $("#page-up").on("click",function(event){

       $("html,body").animate({
        scrollTop:0
      },1000);

      event.preventDefault();

    });

    $("#btn-bars").on("click", function(){

      $("header").toggleClass("open-menu");

    });

    $("#menu-mobile-mask, .btn-close").on("click",function(){

      $("header").removeClass("open-menu");

    });

    $("#btn-search").on("click",function(){

      $("header").toggleClass("open-search");
      $("inpu-seach")


    });


});