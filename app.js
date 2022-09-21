$(document).ready(function(){

    $(window).scroll(function(){

        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
                }

          // Scrolling Button Btn
          if(this.scrollY >500){
            $('.scroll-up-btn').addClass("show");
            }else{
            $('.scroll-up-btn').removeClass("show");
            }   
    });

    var typed = new Typed(".typing-1",{
        strings: [
             "Developer", "Dancer"
            
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings: [
            "Developer", "Dancer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    // owl carousel animation
    $('.carousel').owlCarousel({
        margin: 20,
        loop:true,
        navigation:true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,

        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
 

});



function mysearch(){
    window.location.assign('https://kirtanp04.github.io/Search-Engine/')
}
function mygame(){
    window.location.assign('https://fightinggamesp.netlify.app/')
}
function myword(){
    window.location.assign('https://kirtanp04.github.io/word-and-character-counter/')
}
function mysspeech(){
    window.location.assign('https://kirtanp04.github.io/voice-converter/')
}
function mycolor(){
    window.location.assign('https://kirtanp04.github.io/color-pointer/')
}
function myhover(){
    window.location.assign('https://kirtanp04.github.io/Hover-Board/')
}
function myqr(){
    window.location.assign('https://kirtanp04.github.io/QR--code-Generator/')
}
function myimg(){
    window.location.assign('https://kirtanp04.github.io/loading-image/')
}
function mycalc(){
    window.location.assign('https://kirtanp04.github.io/love-calculator/')
}
function speech(){
    window.location.assign('https://kirtanp04.github.io/voice-converter/')
}
function color(){
    window.location.assign('https://kirtanp04.github.io/color-pointer/')
}
function myfun(){
    window.open('https://www.facebook.com/kirtanp04');
  }
  
  function myinsta(){
    window.open('https://www.instagram.com/kirtanp04/');
   
  }
  
  
  function mygit(){
      window.open('https://github.com/kirtanp04')
  }
  
  














