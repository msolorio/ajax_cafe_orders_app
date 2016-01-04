$(function(){

	var $currentOrders = $('.current-orders');
	var $name = $('#name');
	var $item = $('#item');

	//GET REQUEST


	$('#add-order').on('click', function(){
		var order = {
			name: $name.val(),
			item: $item.val()
		};

		//POST REQUEST
		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/msolorio/orders',
			data: order,
			success: function(){
				alert('the post request was successful');
			}
		});
	});

});