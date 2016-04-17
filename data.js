$(function() {
	var url = '//54.235.200.47/';

	// set default value to fields
	var type = 'mood';
	var data = '{"descriptor":"confused"}';
	$('[name="type"]').val(type);
	$('[name="data"]').val(data);

	// add custom submit functions to forms
	$('form#post').submit(function() {
		var $form = $(this);
		var $type = $form.find('[name="type"]');
		var $data = $form.find('[name="data"]');
		var type = $type.val();
		var data = $data.val();

		data = JSON.parse(data);
		data.type = type;
		console.log('POST', type, data);

		$.ajax({
			url: url,
			type: 'POST',
			crossDomain: true,
			data: JSON.stringify(data), // not data
			//dataType: 'json', // server response is plain text not JSON
			success: function(response) {
				console.info(response);
			},
			error: function(xhr, status) {
				console.error(status, xhr);
			},
		});
		return false;
	});

	$('form#get').submit(function() {
		var $form = $(this);
		var $type = $form.find('[name="type"]');
		var type = $type.val();
		console.log('GET', type);

		$.get(url + ['2016-04-15', '2016-04-18', type].join('/'), function(data) {
			console.info(data);
		});
		return false;
	});
});
