# pricing

#eBay API Info
Username: tschmauch
Password: UofUbc!2018

#Walmart API Info
URL: https://developer.walmartlabs.com/apps/mykeys
Username: tbenedict
Password: UofUbc!2018

#Discount
URL: discountapi.com
Discount API key = KYNuXSPz

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
	User Interface/Discount API:  Casey
	eBay API:  Tyler
	Walmart API:  Thomas
	Google Ad API:  Time permitting

	Use our API's to pull data to the page that has an item the user has requested. One for Amazon, one for eBay, and one for Walmart. We also want to pull ads from Google and coupons from Discount API that are related to the Users input

AJAX Desired Return:
	Price
	Model
	Description
	Name
	UPC
	Image (5 if possible)
	URL link to purchase

	WireFrame:
	<img src="assets/images/rsz_priceitwireframe.jpg">