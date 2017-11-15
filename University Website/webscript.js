function delete_info(){
        $('div.info').removeClass('show');
	 $('div.info').addClass('no_show');
	
	 $('div.staff').removeClass('no_show');
	 $('div.staff').addClass('show');
    }
	
$(document).on('ready', function(){
  
	/*reveales the staff details when the 'show profile' text is clicked*/
	$('p.open').on('click', function(){
	
	  $(this).siblings().removeClass('no_show');
	  $(this).siblings().addClass('show');
	  $(this).removeClass('show');
	  $(this).addClass('no_show');
	  $(this).add
	});
	/*hides the staff profile text when the 'close profile; text is clicked*/
	$('p.close').on('click', function(){
	
	  $(this).siblings().removeClass('show');
	  $(this).siblings('img').addClass('show');
	  $(this).siblings('h2').addClass('show');
	  $(this).siblings('p.open').addClass('show');
	  $(this).siblings().addClass('no_show');
	  $(this).removeClass('show');
	  $(this).addClass('no_show');
	  
	});
	/*puts the staff content on the page when the staff button is pressed*/
	$('li.staff').on('click', function(event){
		
	  event.preventDefault();
	 
	 $('div.info').removeClass('show');
	 $('div.info').addClass('no_show');
	 
	 $('div.staff').removeClass('no_show');
	 $('div.staff').addClass('show');
	});
	/*puts the department information on the page when the info button is pressed*/
	$('li.info').on('click', function(event){
		
	  event.preventDefault();
	 
	 $('div.staff').removeClass('show');
	 $('div.staff').addClass('no_show');
	 
	 $('div.info').removeClass('no_show');
	 $('div.info').addClass('show');
	});
	
});

