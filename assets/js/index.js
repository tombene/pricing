$('#btn-search').on('click',function(){
	var searchString = $('#search-input').val();
	walmart.getItems(searchString, displayItems);
	console.log('Im here');
	// amazon.getItems(searchString, displayItems);
	// ebay.getItems(searchString, displayItems);
});

function displayItems(data, containerName){
	var div = $('<div>').addClass('row');
	var pTag = $('<p>');
	pTag.text('$'+data.price);
	div.append(pTag);
	pTag.text(data.name);
	div.append(pTag);
	pTag.text(data.model);
	div.append(pTag);
	pTag.text(data.upc);
	div.append(pTag);
	pTag.text(data.description);
	div.append(pTag);
	for(var i = 0;i < data.image.length;i++){
		var imgTag = $('<img>').attr('src',data.image[i]).addClass(containerName+'-img-'+i);
		div.append(imgTag);
	}
	pTag.text(data.url);
	div.append(pTag);
	$('#'+containerName+'-container').append(pTag);
}

