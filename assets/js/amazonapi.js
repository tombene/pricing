


// http://webservices.amazon.com/onca/xml?
// Service=AWSECommerceService&
// AWSAccessKeyId=[AWS Access Key ID]&
// AssociateTag=[Associate ID]&  
// Operation=ItemSearch&
// Keywords=the%20hunger%20games&
// SearchIndex=Books
// &Timestamp=[YYYY-MM-DDThh:mm:ssZ]
// &Signature=[Request Signature]


var randomFormat = "MM/DD/YYYY";
// var convertedDate = moment(todaysDate, randomFormat);
// console.log(todaysDate);

var amzAccessKey = "AKIAJRYOQWC2PWS5IWMQ";
var amzAssociateID = "priceit05-20";
var amzSearchKeywords = "Dominion";
var amzSecretKey = "Z+wOlQop9dvlRNXLlEJUDfndNKx0oXODfYl5SJd6";
var amzTimestamp = moment().format("YYYY-MM-DDThh:mm:ssZ");
var amzUrl = "https://webservices.amazon.com/onca/xml?Service=AWSECommerceService&AWSAccessKeyId=" + amzAccessKey + "&AssociateTag=" + amzAssociateID + "&Operation=ItemSearch&Keywords=" + amzSearchKeywords + "&Signature=" + amzSecretKey + "&Timestamp=" + amzTimestamp;
var url = "http://webservices.amazon.com/onca/xml?Service=AWSECommerceService&AWSAccessKeyId=AKIAJRYOQWC2PWS5IWMQ&AssociateTag=priceit05-20&Operation=ItemSearch&Keywords=the%20hunger%20games&SearchIndex=Books"

amzSearch();

function amzSearch() {
$.ajax({
	url: amzUrl,
	method: "GET",
	crossDomain: true
}).then(function(response) {
	var results = response;
	console.log(results);

});

};