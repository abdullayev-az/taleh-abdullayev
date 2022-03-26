$('.carusel').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items:1,
            nav:false
        },
        500:{
            items:2,
            nav:false
        },
        800:{
            items:3,
            nav:false
        },
        1240:{
            items:3,
            nav:false
        },
    }
});


var typed = new Typed(".auto-text", {
    strings: ["Taleh Abdullayev", "Web Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

$('.sun1').click(function(){
  
   $('.sun').css('display','none');
   $('.moon').css('display','block');
   $('body').css({'background':'radial-gradient(#090114d8, #010002d9), url(img/pngwing.com3.png)','color':'#fff'});
   $('.colors').css('color','#fff');
   $('.color-2').css('color','#111');
   $('.invert').css('filter','invert(1)');
});
$('.moon1').click(function(){
    
    $('.sun').css('display','block');
    $('.moon').css('display','none');
    $('body').css({'background':'url(img/pngwing.com3.png)','color':'black'});
    $('.colors').css('color','#111');
   $('.color-2').css('color','#111');
   $('.invert').css('filter','invert(0)');
 });