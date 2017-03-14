// COMMON JAVASCRIPT -----------------------------------------------------------------------

$(document).foundation();


// smooth scroll
// $('a[href^="#"]').on('click',function (e) {
//         e.preventDefault();

//         var target = this.hash;
//         var $target = $(target);

//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top
//         }, 500, 'swing');
//     });


$(document).ready(function() {
    // loader
    setTimeout(function() {
        $('body').removeClass('no-fouc');
    }, 300);
    // main nav dropdown animation
    $( '#mainNav ul li' ).hover(
        function(){
            $(this).children('.submenu').slideDown(150);
        },
        function(){
            $(this).children('.submenu').slideUp(150);
        }
    );
window.sr = ScrollReveal().reveal('.addAnimation', { duration: 600, scale: 0.8, viewFactor: 0.8 }, 100);

//remove animations on mobile
function removeMobileAnimations(){
    var slideAnimations = document.querySelectorAll('.animated');
    if(slideAnimations || slideAnimations.length !=0) {
        for(var i=0; i<slideAnimations.length; i++) {
            slideAnimations[i].classList.remove('animated');
        }
    }
}
// check if mobile, remove animations if true
if(window.innerWidth <= 639) {
        removeMobileAnimations();
    }

}); 
// control active element behaviour on accordions
$('#truckFleetList li a').on('click', function(){
    $(':focus').blur();
});

