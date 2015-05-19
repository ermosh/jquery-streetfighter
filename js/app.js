$(document).ready(function() {

   var playHadouken = function () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  };

  $('.ryu-still').show();

// Show ryu-ready when the mouse enters the .ryu div
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  });

// Show ryu-still when mouse leaves the div
  $('.ryu').mouseleave(function () {
    $('.ryu-ready').hide();
    $('.ryu-still').show();  
  })

// Click to play hadouken and show Ryu throwing
  .mousedown(function () {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();

    $('.hadouken').finish().show()
    	.animate(
	  		{'left': '1020px'},
	  		500,
	  		function() {
			    $(this).hide();
			    $(this).css('left', '520px');
	  		});
  });

// Release the mouse button to show Ryu ready again
  $('.ryu').mouseup(function () {
    $('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  });

  // When x is pressed, show the ryu-cool picture
	$('body').keydown(function (e) {
        if (e.keyCode === 88) {
        	$('.ryu-ready').hide();
        	$('.ryu-throwing').hide();
          $('.ryu-still').hide();
          $('.ryu-cool').show();
        }
    });

	$('body').keyup(function (e) {
        if (e.keyCode === 88) {
            $('.ryu-still').show();
            $('.ryu-cool').hide();
        };
    });

 	}); // document.ready ends



































