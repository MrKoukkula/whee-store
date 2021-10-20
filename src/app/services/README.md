## Shopping Cart service

Since there is no connection to backend in this application, all the customer shopping cart logic is handled in shopping-cart service.
Normally, I would not inject a service in this many components and connect it to templates, 
but instead would handle the logic in the backend and store the cart contents on the server.
