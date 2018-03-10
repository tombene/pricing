$('#btn-search').on('click',function(){
	removeContainerChildren();
	var searchString = $('#search-input').val();
	walmart.getItems(searchString, displayItems);
	amazon.getItems(searchString, displayItems);
	ebay.getItems(searchString, displayItems);
	$('#search-input').val('');
});

function displayItems(data, containerName){
	var div = $('<div>').addClass('row '+containerName+'-div');
	div.append('<h1>'+'$'+data.price+'</h1>');
	div.append('<p>'+data.name+'</p>');
	div.append('<p>'+data.model+'</p>');
	div.append('<p>'+data.upc+'</p>');
	div.append('<p>'+data.description+'</p>');

	for(var i = 0;i < data.image.length;i++){
		var imgTag = $('<img>').attr('src',data.image[i]).addClass(containerName+'-img-'+i);
		div.append(imgTag);
	}
	div.append('<p><a href="'+data.url+'">BUY HERE!</a></p>');
	$('#'+containerName+'-container').append(div);
}

function removeContainerChildren(){
	$('.walmart-div').remove();
	$('.amazon-div').remove();
	$('.ebay-div').remove();
}

