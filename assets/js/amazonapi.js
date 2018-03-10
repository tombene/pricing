
// The below functions format and encode the Amazon url.
var amzSearchKeywords = "Dominion%20Board%20Game";
getAmazonItemInfo(amzSearchKeywords);

function sha256(stringToSign, secretKey) {
	var hex = CryptoJS.HmacSHA256(stringToSign, secretKey);
	return hex.toString(CryptoJS.enc.Base64);
}

function timestamp() {
	var date = new Date();
	var y = date.getUTCFullYear().toString();
	var m = (date.getUTCMonth() + 1).toString();
	var d = date.getUTCDate().toString();
	var h = date.getUTCHours().toString();
	var min = date.getUTCMinutes().toString();
	var s = date.getUTCSeconds().toString();

	if (m.length < 2) { m = "0" + m; }
	if (d.length < 2) { d = "0" + d; }
	if (h.length < 2) { h = "0" + h; }
	if (min.length < 2) { min = "0" + min; }
	if (s.length < 2) { s = "0" + s }

	var date = y + "-" + m + "-" + d;
	var time = h + ":" + min + ":" + s;
	return date + "T" + time + "Z";
}

function getAmazonItemInfo(amzSearchKeywords) {
	var PrivateKey = "Z+wOlQop9dvlRNXLlEJUDfndNKx0oXODfYl5SJd6";
	var PublicKey = "AKIAJRYOQWC2PWS5IWMQ";
	var AssociateTag = "priceit05-20";

	var parameters = [];
	parameters.push("AWSAccessKeyId=" + PublicKey);
	parameters.push("Keywords=" + amzSearchKeywords);
	parameters.push("Availability=Available");
	parameters.push("Operation=ItemSearch");
	parameters.push("SearchIndex=All");
	parameters.push("ResponseGroup=" + encodeURIComponent('Images,ItemAttributes,Offers'));
	parameters.push("Service=AWSECommerceService");
	parameters.push("Timestamp=" + encodeURIComponent(timestamp()));
	parameters.push("Version=2011-08-01");
	parameters.push("AssociateTag=" + AssociateTag);

	parameters.sort();
	var paramString = parameters.join('&');

	var signingKey = "GET\n" + "webservices.amazon.com\n" + "/onca/xml\n" + paramString

	var signature = sha256(signingKey, PrivateKey);
	signature = encodeURIComponent(signature);

	var amazonUrl = "http://webservices.amazon.com/onca/xml?" + paramString + "&Signature=" + signature;
	console.log('hit');
	console.log(amazonUrl);
	amzSearch(amazonUrl);
}

////////////////////////////////////////////////////////////////////////////////////////////

// Changes XML to JSON
function xmlToJson(xml) {

	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
			obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for (var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof (obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof (obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};

//////////////////////////////////////////////////////////////////////////////////


function amzSearch(amazonUrl) {
	$.ajax({
		url: amazonUrl,
		method: "GET",
		crossDomain: true
	}).then(function (response) {
		var results = xmlToJson(response);
		var amazonResults = results.ItemSearchResponse.Items;
		var i = 0;
		console.log(results);
		console.log(amazonResults.Item[i].ItemAttributes.Title);

	});

};