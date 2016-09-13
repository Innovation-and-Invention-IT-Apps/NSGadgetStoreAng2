# NSGadgetStoreAng2


This project is a POC for TFG built using the following:
>	1. NativeScript
>	2. Angular 2
>	3. MongoDB
>	4. Spring Boot Microservices


Functional Flow:
===================
Home Page:
———————————
	User launches the app and it appears with the home page with the following 2 
>	use cases:
>		1. Registration
>		2. Login

	The Registration module needs the user to input a valid email address and password. Validation is implemented to validate email address and empty strings. Upon tapping Sign Up button backend service is called for user registration. The data is stored on MongoDB on server.

	The Login module needs valid email address and password and upon tapping Login button string validation takes place and then the Login Microservice is being called. Inputs are validated against data in the backend MongoDB. Upon failure the user gets an alert with appropriate message. Upon success the page navigates to Gadgets Store List page.

Gadgets List Page:
————————————————————
>	use cases:
>		1. Populate Gadgets
>		2. Select Gadgets
>		3. Unselect Gadgets
>		4. Cart Items Count
>		5. View Cart

	On load of this page a Microservice Get Gadgets List is being invoked which then returns all the gadgets available in the store. This information then gets populated on the page (Populate Gadgets use case).

	User then can scroll through the items and to select he/she can tap on the item.

	To unselect or remove from the cart the user can tap again on the item he/she has tapped to select earlier.

	Upon Select or Unselect event the items are either added or removed from the cart, which then reflects next to the Cart Icon.

	To view the Cart user may tap either on the number or on the cart icon.


Cart Page:
———————————
>	use cases:
>		1. Remove Item
>		2. Go Back
>		3. Check Out

	Upon tapping on the X button on the cart items the item will be removed from the cart and the items counter is updated accordingly.

	To go to be previous page (Gadgets List Page) the user may tap on the <<Go Back button. User can add more items into the cart.

	To finalise the cart user need to tap on Check Out which in turn will send the cart details to the backend via Process Cart Microservice.


Note that the Process Cart service just prints the items on the console. If needed developer may implement business logic to store the data on DB or send email (email functionality is already implemented in Microservice).




Setup Instructions:
=====================





	
	




