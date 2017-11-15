
function add_comment(){
		event.preventDefault();
		var nickname = $('input[name=nickname]').val();
		var email = $('input[name=email]').val();
		var comment = $('textarea').val();
		$('dl').append('<dt>' + nickname + '</dt>');
        $('dl').append('<dd>' + comment + '</dd>');
	}
	
function show_reviews_click_handler(event) {
  event.preventDefault();
  var list_item = $('dl.no_show');
  list_item.addClass('show');
  list_item.removeClass('no_show');
    //load_comments(list_item); 
	$('p.show_comments').removeClass('show');
	$('p.show_comments').addClass('no_show');
	
	$('p.hide_comments').removeClass('no_show');
	$('p.hide_comments').addClass('show');
	
}
function hide_reviews_click_handler(event) {
   
	$('p.hide_comments').removeClass('show');
	$('p.hide_comments').addClass('no_show');
	
	$('p.show_comments').removeClass('no_show');
	$('p.show_comments').addClass('show');
	
	$('dl').removeClass('show');
	$('dl').addClass('no_show');
}

$(document).on('ready', function(){
	$('p.show_comments').on('click', show_reviews_click_handler);
	$('p.hide_comments').on('click', hide_reviews_click_handler);
	$('form').on('submit',add_comment);
});