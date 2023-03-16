   $(document).ready(function(){
   	// Header Nav Start

    // Responsive Navbar JS Start
    (function($) {
  "use strict";
  var openBtn = $("#open-button"),
    colseBtn = $("#close-button"),
    menu = $(".menu-wrap");
  // Open menu when click on menu button
  openBtn.on("click", function() {
    menu.addClass("active");
  });
  // Close menu when click on Close button
  colseBtn.on("click", function() {
    menu.removeClass("active");
  });
  // Close menu when click on anywhere on the document
      $(document).on("click", function(e) {
        var target = $(e.target);
        if (target.is(".menu-wrap, .menu, .icon-list, .icon-list a, .icon-list a span, #open-button , .accordion-button , .accordion-item > h2") === false) {
          menu.removeClass("active");
          e.stopPropagation();
        }
      });
    })(jQuery);
    // Responsive Navbar JS End

      

	    	    $(function () {
			        var current = window.location.href;
			        $('.header-m .header-m-cntr ul li a').each(function () {
			            // if the current path is like this link, make it active
			            if (this.href == current) {
			                $(this).addClass('active');
			            }
			        })
			    })

// Header Nav End

$(".header-m .header-m-cntr ul li a").hover(function(){
  $(".header-m .header-m-cntr ul li a.active").css("color","#FFFFFF80");
},function(){
  $(".header-m .header-m-cntr ul li a.active").css("color","#E0AE2C");
})


});