$(document).ready(function() {
    function checkoutDisplay() {
        if ($(".ordered .row").html().trim() === "") {
            var emptyCart = $("<div>").addClass("empty-cart");
            var cartIcon = $("<i>").addClass("fas fa-shopping-cart");
            var messageTitle = $("<h6>").addClass("mb-0 pb-1").text("Your cart is empty!");
            var message = $("<p>").text("Looks like you haven't added anything to your cart just yet!");
            $(".checkout").remove();          
            emptyCart.append(cartIcon).append(messageTitle).append(message);
            $("#collapseOne .ordered").append(emptyCart);
        } else {
            var button = $("<button>").addClass("round-btn checkout mt-3").text("Checkout");
            $(".empty-cart").remove();
            $("#collapseOne .ordered").append(button);
        }
    }
    checkoutDisplay();

    //modal form on submit
    $(".burger-form").on("submit", function(event) {
        event.preventDefault();

        //get value of burger price from form
        var price = $("#price").val().trim();
        //convert number to string to use index of
        var priceString = price.toString();
        //check if price has a decimal
        var decimalIndex = priceString.indexOf(".");
        //if it has a decimal
        if (decimalIndex !== -1) {
            //check how many decimal places
            var cents = priceString.substring(decimalIndex + 1, decimalIndex + 4);
            //if price has one decimal place
            if (cents.length !== 2) {
                //add a zero to the end of price
                price = price + "0";
            //if price has two decimal places
            } else {
                //use the value from the form
                price = $("#price").val().trim();
            }
        }

        var newMenuItem = {
            name: $("#burger").val().trim(),
            description: $("#description").val().trim(),
            price: price
        }
        //add new burger to menu
        $.ajax("/api/burger_menu", {
            type: "POST",
            data: newMenuItem
        }).then(function() {
            location.reload();
        })
    })

    //would like to make this into a select checked and move all checked into checkout
    $(".add-item").on("click", function() {
        var newBurger = {
            name: $(this).data("burger"),
            price: $(this).data("price")
        }
        //add new burger to checkout
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        })
    })

    //update devoured state from false to true for all burgers in this section
    $(".checkout").on("click", function() {
        //array holding all of the burger ids that need to be updated
        var burgerArr = [];
        //loop through each burger in the checkout
        $(".burger-checkout").each(function() {
            //push object into array
            burgerArr.push({
                id: $(this).data("id")
            });
        })
        //ajax is async so need a counter to match array length to determine when ajax calls are complete
        var counter = 0;
        //update all rows according to id
        $.each(burgerArr, function (id, arr) {
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: arr
            }).then(function() {
                counter++;
                //once looped through all of array, refresh page
                if (counter === burgerArr.length) {
                    location.reload();
                }
            })
        })
    })
})