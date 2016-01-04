$(function(){

	var $currentOrders = $('.current-orders');
	var $name = $('#name');
	var $item = $('#item');

	//GET REQUEST
	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/msolorio1/orders',
		success: function(oldOrders) {
			$.each(oldOrders, function(i, order) {
				$currentOrders.append(
					'<li class="current-order-single">Name: '+order.name+', '+
					'Item: '+order.item+'</li>'
				);
			});
		},
		error: function() {
			alert('error loading orders');
		}
	});

	$('#add-order').on('click', function(){
		var order = {
			name: $name.val(),
			item: $item.val()
		};

		//POST REQUEST
		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/msolorio1/orders',
			data: order,
			success: function(newOrder){
				$currentOrders.append(
					'<li class="current-order-single">Name: '+newOrder.name+', '+
					'Item: '+newOrder.item+'</li>'
					);
			},
			error: function(){
				alert('error saving new order');
			}
		});
	});

});