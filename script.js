$(document).ready(function() {  
var stickyNavTop = $('.navigationbar').offset().top; $('.inner1').offset().top; $('.inner2').offset().top; $('.inner3').offset().top; $('.logo').offset().top;
  
var stickyNav = function(){  
var scrollTop = $(window).scrollTop();  
       
if (scrollTop > stickyNavTop) {   
    $('.navigationbar').addClass('sticky');
	$('.inner1').addClass('sticky');
	$('.inner2').addClass('sticky'); 
	$('.inner3').addClass('sticky'); 
	$('.logo').addClass('sticky');
	$('.logo').addClass('logoinbar');
} else {  
    $('.inner1').removeClass('sticky');
    $('.inner2').removeClass('sticky');
	$('.inner3').removeClass('sticky');
    $('.navigationbar').removeClass('sticky');	
	$('.logo').removeClass('sticky');
	$('.logo').removeClass('logoinbar');
}  
};  
  
stickyNav();  
  
$(window).scroll(function() {  
    stickyNav();  
});  
});  

