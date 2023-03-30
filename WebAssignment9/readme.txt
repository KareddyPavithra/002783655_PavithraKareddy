1) Connected my assignment 8 to this assignment. 
Created a proper folder structure defining controller, model, router and server. 
Also, all the api calls are given. The backend can be verified on the postman. 
All the status codes and messages are given correctly. 
Created REST API folder structure. Server.js is the entry. Given folder structure is followed:
 api: 
	controller
		controller.js- async await functions are defined to send and receive data
	models
		model.js - mongoose schema is defined
	routes
		route.js - router methods are given. router.post, router.get etc
	services
		service.js - createuser, existsuser are given
	server.js - entry point: gave the mongodb connection url 
frontend:
	src	
		App
			Components
				Card.js
			Login
				LoginPage.css
				LoginPage.js
			Main
				MainPage.css
				MainPage.js
			pages
				images
				About.js
				Home.js
				Jobs.js
				Contact.js
							
2) react components have been used in all the pages. Folder structure is explained above
3) Card components have been used in all of the 4 pages:
	About.js: Card layout is used to given an image and a small description about the page.
	Home.js: Image and text is given inside the card layout stating that it is the home page.
	Jobs.js: This page lets users drop their resumes in the link. Card layout is used for the same.
	Contact.js: Phone and mail images are given as two cards giving the contact information about the page.	
React map() is used in the login page by defining google and facebook links as loginOptions array and then used them as an alternative sign in options by directing them to other pages.
 {loginOptions.map((link) => (
                    <button key={link.socialMedia} className="login-button" onClick={(e) => {
                        e.preventDefault();
                        handleButtonClick(link.links);
                    }}
                >
                    {link.socialMedia}
                </button>
this is the given code

References have been taken from the w3 schools for card components and youtube videos for integration using axios and map().