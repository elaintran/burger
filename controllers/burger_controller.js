var express = require("express");
var router = express.Router();

//home route
router.get("/", function(req, res) {

})

//NOTES
//have tabs to flip through instead of moving submitted burgers to a section
//on the same page
//either route to separate page or change display to block and none on same page
//menu is the waitlist
//use checkboxes to select burgers from the waitlist to move them all at once
//pop up to indicate burgers have been devoured?
//need a devoured tab
//maybe change devoured tab to ordered
//or menu -> waitlist -> ordered, but too much clicking
//need to remove and edit burger
//edit and remove from mysql also
//use modal for burger input
//input sections consist of name, description, price of burger
//test with name first, then incorporate extra information