
function loading() {
	if (document.getElementById('loader').disabled != true) {
		var loader = document.getElementById('submit').classList;
		var icon = document.getElementById('loader').classList;
		icon.add('load');
		icon.add('icon');
		//change color variable value
		setTimeout(function () {
			//loader.remove('input-field');
			icon.remove('load');
			icon.remove('icon');
			loader.remove('submit');
			loader.add('submit-disable');
			document.getElementById('loader').disabled = true;

		}, 2000);
	}
}