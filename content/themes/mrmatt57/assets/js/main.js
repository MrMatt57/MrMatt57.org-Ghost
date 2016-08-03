(function($) {
    "use strict";

    /*
	* Dynamically set the url to share
	*/
	function setShareUrl(){
		var actualUrl = window.location.href.replace('#disqus_thread','');
		var twitterUrl = 'http://twitter.com/share?text={title}&url={url}'.replace('{url}',actualUrl).replace('{title}',encodeURIComponent(document.title).replace(/%20/g,'+'));
		var facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u={url}'.replace('{url}',actualUrl);
		var googleUrl = 'https://plus.google.com/share?url={url}'.replace('{url}',actualUrl);

		$('a.icon-twitter').attr('href',twitterUrl);
		$('a.icon-facebook').attr('href',facebookUrl);
		$('a.icon-google-plus').attr('href',googleUrl);
	}


    $(document).ready(function() {
    	setShareUrl();
        $(".post").fitVids();
        $(".gallery-image").fluidbox();
    });

	
    echo.init({
      offset: 100,
      throttle: 250,
      unload: false
    });

    var offset = 325;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('#back-to-top').fadeIn(duration);
        } else {
            $('#back-to-top').fadeOut(duration);
        }
    });
    
    $('#back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
    


}(jQuery));