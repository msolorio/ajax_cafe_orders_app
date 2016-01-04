$(function(){

	var $currentOrders = $('.current-orders');
	var $name = $('#name');
	var $item = $('#item');

	var orderTemplate = "<li class='current-order-single'>Name: {{name}}, Item: {{item}} <span class='cross' data-id='{{id}}'>&#735;</span></li>";

	function populateOrder(order) {
		$currentOrders.append(Mustache.render(orderTemplate, order));
	}

	//GET REQUEST
	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/msolorio1/orders',
		success: function(oldOrders) {
			$.each(oldOrders, function(i, oldOrder) {
				populateOrder(oldOrder);
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
				populateOrder(newOrder);
			},
			error: function(){
				alert('error saving new order');
			}
		});

		$('.add-order-input').val('');
	});

	//DELETE REQUEST
	$currentOrders.delegate('.cross', 'click', function(){	

		var $li = $(this).closest('li');

		$.ajax({
			type:'DELETE',
			url: 'http://rest.learncode.academy/api/msolorio1/orders/'+$(this).attr('data-id'),
			success: function(){
				$li.fadeOut(100, function(){
					$(this).remove();
				});
			}
		});
	});

});