# Burger
Burger is a burger logging application that allows users to add their own custom burgers to the menu,select burgers to checkout, and track their purchase history. All actions are powered by the MySQL database.

## Development Process
The burger application is set up with two tables within MySQL: `burger_menu` and `burgers`.

`burger_menu` is used as a visual and displays all of the new and existing burgers. Custom burgers are added onto the menu via modal using a `POST` request. Once the user selects a burger from the menu to add to cart, the data is added to `burgers` by sending another `POST` request.

`burgers` holds the burger data added from `burger_menu` and the information is presented in the
**Order Summary** (not devoured) and **Purchase History** (devoured) sections. Instead of checking out (devouring) the burgers individually, `$.each` is utilized to iterate through all of the burgers and send multiple `PUT` requests in order to update the status (change the devoured state to true) of all burgers in that section. All of the burgers purchased (devoured) are then moved to **Purchase History**.

## Demo
[View Demo Here](https://burger-ett.herokuapp.com)

## Technologies Used
* [MySQL](https://www.npmjs.com/package/mysql)
* [Express](https://www.npmjs.com/package/express)
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)