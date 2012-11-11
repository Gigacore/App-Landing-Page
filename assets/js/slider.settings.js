// JavaScript Document

// Below are the code that triggers the sliding and fading animation of BxSlider. 
// You can make any necessary changes as per your requirements.

// Settings for iphone in-screen slider 

$(function(){
  $('#iphone-slide').bxSlider({
    auto: true,
	mode: 'horizontal',	
	speed: 700,	
	nextText: '',
	prevText: '',
	hideControlOnEnd: true
  });
});	

// Settings for Screenshots slider

$(function(){
  $('#screenslide').bxSlider({
    auto: false,
	mode: 'horizontal',	
	speed: 700,	
	nextText: '<div id="next"></div>',
	prevText: '<div id="prev"></div>',
	infiniteLoop: false,
	hideControlOnEnd: false
  });
});	


// Settings for testimonials fader

$(function(){
  $('.testimonials').bxSlider({
    auto: true,
	mode: 'fade',	
	nextText: '',
	prevText: '',
	speed: 2000,	
	hideControlOnEnd: true
  });
});	