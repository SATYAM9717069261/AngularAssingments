function loading(){	
	var loader=document.getElementById('loading').classList;
	loader.remove('hide');
	setTimeout(function(){loader.add('hide')},2000);
}