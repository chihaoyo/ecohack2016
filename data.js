$(function() {
	var url = '//54.235.200.47/';
	var type = 'mood';
	var data = '{"descriptor":"confused"}';
	var $type = $('#type').val(type);
	var $data = $('#data').val(data);

	$('form').submit(function() {
		var type = $type.val();
		var data = $data.val();

		data = JSON.parse(data);
		data.type = type;

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

	$('button#query').click(function() {
		$.get(url + ['2016-04-15', '2016-04-18', type].join('/'), function(data) {
			console.info(data);
		});
	});
});
