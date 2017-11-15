//loads comments from the edge hill server and displays them in the comments section
function load_comments(){
	$('#comments_section').empty();
	var promise = $.ajax('https://teaching.computing.edgehill.ac.uk/cis1007/add-my-comment/23237881');
	promise.done(function(data) {
		for(idx = 0; idx < data.length; idx++){
		$('#comments_section').append('<dt>' + data[idx].name + ' <a href="#" class="delete_comment" id="' +  data[idx].id + '">(delete)</a></dt>');
		$('#comments_section').append('<dd>' + data[idx].comment + '</dd>');
		$('a.delete_comment').on('click', delete_comment);
		}
	});
};
//removes the chosen comment from the server and the webpage
function delete_comment(event){
	event.preventDefault();
	var dt = $(this).parent();
	var promise = $.ajax('https://teaching.computing.edgehill.ac.uk/cis1007/add-my-comment/23237881/' + this.id, {
		method: 'DELETE'
	});
	promise.done(function(){
		$(dt).next().remove();
		$(dt).remove();
	});
}
//adds comments to the server, re-loads the comments and empties the input boxes
function add_comment(){
		event.preventDefault();
		var promise = $.ajax('https://teaching.computing.edgehill.ac.uk/cis1007/add-my-comment/23237881', {
			data: $('#the_form').serialize(),
			method: 'POST'
			});
			load_comments();
			$('input[name=email]').val('');
			$('input[name=name]').val('');
			$('textarea[name=comment]').val('');
}
//this shows the comments to the user on the screen 
function show_comments_click_handler(event) {
	event.preventDefault();
	
	$('dl').removeClass('no_show');
	$('dl').addClass('show');
	$('p.show_comments').removeClass('show');
	$('p.show_comments').addClass('no_show');
	
	$('p.hide_comments').removeClass('no_show');
	$('p.hide_comments').addClass('show');
	load_comments();
}
//this hides the comments from the user on the screen
function hide_comments_click_handler(event) {
   
	$('p.hide_comments').removeClass('show');
	$('p.hide_comments').addClass('no_show');
	
	$('p.show_comments').removeClass('no_show');
	$('p.show_comments').addClass('show');
	
	$('dl').removeClass('show');
	$('dl').addClass('no_show');
}
//this expands the chosen module to show the module details and the close module text
function show_modules(event){
	event.preventDefault();
	var module_text = $(this);
	$(module_text).next().removeClass('no_show');
	$(module_text).next().addClass('show');
	$(module_text).next().next().removeClass('no_show');
	$(module_text).next().next().addClass('show');
}
//this hides the module details and the close module text
function close_modules(event){
	event.preventDefault();
	var module_text = $(this);
	$(module_text).prev().removeClass('show');
	$(module_text).prev().addClass('no_show');
	$(module_text).removeClass('show');
	$(module_text).addClass('no_show');
}
//when the document finishes loading
$(document).on('ready', function(){
	//shows comments 
	$('.show_comments').on('click', show_comments_click_handler);
	//hides comments
	$('.hide_comments').on('click', hide_comments_click_handler);
	//adds the comment to the server and page
	$('#the_form').on('submit', add_comment);
	//shows module details
	$('.show_module').on('click', show_modules);
	//hides module details
	$('.close_module').on('click', close_modules);
	//shows the module section and closes the comment section
	$('#open_modules').on('click', function(event){
		event.preventDefault();
		$('#course_info').removeClass('no_show');
		$('#course_info').addClass('show');
		
		$('#comments').removeClass('show');
		$('#comments').addClass('no_show');
	});
	//shows the comments section and closes the module section
	$('#open_comments').on('click', function(event){
		event.preventDefault();
		$('#comments').removeClass('no_show');
		$('#comments').addClass('show');
		
		$('#course_info').removeClass('show');
		$('#course_info').addClass('no_show');
	});
});