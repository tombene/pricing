# pricing

#eBay API Info
Username: tschmauch
Password: UofUbc!2018

#Walmart API Info
Username: tbenedict
Password: UofUbc!2018

#Discount
URL: discountapi.com
Discount API key = KYNuXSPz

#Amazon API Info
Associate ID = priceit05-20
Access Key = AKIAJRYOQWC2PWS5IWMQ
Secret Key = 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
url: http://webservices.amazon.com/onca/xml?
Service=AWSECommerceService&
AWSAccessKeyId=[AWS Access Key ID]&
AssociateTag=[Associate ID]

---------------------------------------------------------------------------------------------------------
Project Proposal
---------------------------------------------------------------------------------------------------------

Project Title: PriceIt

Team Members:
	Thomas Benedict
	Merek Smith
	Casey Graser
	Tyler Schmauch

Project Description:
	A tool in which user searches for product (UPC, product name string, etc.) and web application submits AJAX request to:
		-Walmart API
		-Amazon API
		-eBay API
		-Discount API

	Algorithm (or API functionality if available) will return lowest price product from each vendor.

	Web app then displays product information, URL link to purchase, image and price for each vendor.  If any coupons available, display coupon below vendor results.
	Website will have User Login functionality, saves search history, user profile, etc.
	Potential additional functionality: Integrate with GoogleAd API and serve up an ad under each vendor's product result for that product

Task Breakdown:
	HTML/UI/CSS:  Group collaborate
	Amazon API:  Merek
	Discount API:  Casey
	eBay API:  Tyler
	Walmart API:  Thomas
	Google Ad API:  Time permitting

AJAX Desired Return:
	Price
	Model
	Description
	Name
	UPC
	Image (multiple if possible)
	URL link to purchase

	WireFrame:
	<img src="assets/images/rsz_priceitwireframe.jpg">