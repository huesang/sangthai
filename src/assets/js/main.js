$(document).ready(function() {
	(function ( $ ) {

		$.fn.animation = function( options ) {
        var settings = $.extend({
            time_delay: 0,
           	offset:450,
        }, options );

    	//lấy hiệu ứng dùng cho đối tượng
    	var data_animate=$(this).attr('data-animate');
    	// khoảng cách của đối tượng đến đầu trang
    	var element_offset=$(this).offset().top;
    	
    	// khoảng cách muốn hiển thị cho đối tượng tính từ đầu màn hình
    	var active_offset=element_offset - settings.offset;
    	var scroll=$(window).scrollTop();
    	if(scroll>active_offset){
    		$(this).addClass(data_animate);
    		$(this).css({
    			'animation-delay': settings.time_delay+'s',
    		});
    	}

    };

}( jQuery ));
	(function ( $ ) {

		$.fn.callanimation = function( options ) {

        // This is the easiest way to have default options.
        return this.each(function() {
        	
        	// khoảng cách muốn hiển thị cho đối tượng tính từ đầu màn hình
        	var data_offset=$(this).attr('data-offset');
        	// delay thoi gian chay hieu ung
        	var data_delay=$(this).attr('data-delay');
        	var $this=$(this);
        	$(window).scroll(function(event) {
	        	$this.animation({
	        		time_delay : data_delay,
	        		offset:data_offset
	        	});
        	});
        	$this.animation({
	        		time_delay : data_delay,
	        		offset:data_offset
	        });
        	
    	});

        
        // Greenify the collection based on the settings variable.
        
    };

}( jQuery ));
	


	$(".form_datetime").datetimepicker(); 
	$('#cmt-items').slick({
		infinite: true,
		dots: true,
		arrows:false,
		autoplay:true,
		slidesToShow: 2,
		slidesToScroll: 1
	});  
	function header_animate(){
        var scroll=$(window).scrollTop();
        if(scroll>85){
            $("header").addClass('fixed');
        }
        if(scroll<85){
            $("header").removeClass('fixed');
        }
    }
	$(window).scroll(function(event) {
		header_animate();
	});
    header_animate();
	$(".animated").callanimation();
    $(".dropdown").click(function(event) {
        $(this).toggleClass('is-active');
    });
    
});