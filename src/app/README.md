# Application structure

This application is structured in mainly 4 main folders: __components__, __models__, __services__ and __views__. 

### Components

The biggest view partial components are found inside here.
- Header
- Product
- Shopping cart

### Models

This folder includes all the Interfaces used in this application: Cart Item and Product. 
Since the app is very small and does not include any customer data or connections to backend server, 
there was no need to make many interfaces.

### Services

Many of the cart functionality is handled inside the shopping-cart service. The products service is used only when loading the main view page, where HttpClient gets the products.

### Views

Currently, the application has only one view and that is found inside this folder. The Main view has all products listed as a list and each of the product is a component itself.
