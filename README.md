# Burger
Burger is a full-stack application that reflects a restaurant storefront where users are able to add their own custom items to the menu, select burgers to checkout, and track their purchase history. Includes MySQL integration and a custom ORM in order to create, log, and display burger data real-time.

## Development Process
* A `GET` request is send upon load from the client side and using a `SELECT` statement from the server side to pull all of the data from the MySQL table. In this case, it is used to retrieve the information from the `burger_menu` and the `burgers` tables to append on the menu and the Order Summary and Purchase History sections respectively.
* Two `POST` requests are sent in this application: (1) when custom burgers are added onto the menu via modal and (2) when users select a burger from the menu to add to cart. In order to add the data into the database, an `INSERT` statement is utilized, followed by the name of the specific table and all of the values.
* The `$.each` function is utilized to iterate through the item listings in the cart and send multiple `PUT` requests to update the purchase status of all burgers in that section. An `UPDATE` statement is called where the status is set to true if the id sent matches the id of the selected row. All of the burgers checked out are then moved to Purchase History.
* Express-Handlebars renders the burger data using the built-in `{{#each}}` helper to loop through all the objects from the database, while the `{{#if}}` and `{{#unless}}` helpers renders burger data in accordance to their purchase status.

## Demo
[View Demo Here](https://burger-590o.onrender.com/)

## Technologies Used
* [MySQL](https://www.npmjs.com/package/mysql)
* [Express](https://www.npmjs.com/package/express)
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
