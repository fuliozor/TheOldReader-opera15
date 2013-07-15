$(window).load(function () {
	$('label').html(dictionary.chooseLanguage);
	$('input').val(dictionary.save).click(function() {
		var select = $('select :selected');
		
		saveOptions('language', select.val());
	});
});

function saveOption(name , value) {
	localStorage.setItem(name, value);
}


