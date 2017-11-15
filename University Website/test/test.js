$(document).on('ready', function(){
	$('form').on('submit', function(event){
		var promise = $.ajax('http://teaching.computing.edgehill.ac.uk/cis1007/add-my-comment/23237881');
		promise.done(function(data) {
			alert(data);
		});
	});
});