$('.signin').on('click', function(){
	$('.modal').fadeIn();
});

$('.close').on('click', function(){
	$('.modal').fadeOut();
});

$('.submit').on('click', function(){
	$('input').addClass('error');
});

$('input').on('click', function(){
	$(this).removeClass('error');
});

$('.modal').on('click', function(){
	$('.modal').fadeOut();
});

$('.getstarted').on('click', function(e){
	e.stopPropagation();
});