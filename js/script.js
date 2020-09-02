
$('document').ready(function(){
    //portfolio filtering
    $('#cd').click(function(){
        $('.cat_2').show();
           $('.cat_1, .cat_3, .cat_4').hide();
       });

       $('#wd').click(function(){
        $('.cat_1').show();
           $('.cat_2, .cat_3, .cat_4').hide();
       });

       $('#gd').click(function(){
        $('.cat_3').show();
           $('.cat_1, .cat_2, .cat_4').hide();
       });

       $('#all').click(function(){
           $('.cat_1, .cat_2, .cat_3, .cat_4').show();
       });

       //scroll to top button
       if ($('#scroll-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#scroll-to-top').addClass('show');
				} else {
					$('#scroll-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#scroll-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
    }
    
    
	// Smooth scrolling using jQuery easing
	  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: (target.offset().top - 54)
			}, 1000, "easeInOutExpo");
			return false;
		  }
		}
	  });
});