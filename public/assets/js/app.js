$(function() {
    //modal form on submit
    $(".burger-form").on("submit", function(event) {
        event.preventDefault();
        var newMenuItem = {
            name: $("#burger").val().trim(),
            description: $("#description").val().trim(),
            price: $("#price").val().trim()
        }
        //add new burger to menu
        $.ajax("/api/burger_menu", {
            type: "POST",
            data: newMenuItem
        }).then(function() {
            location.reload();
        })
    })

    //possibly change this into a button
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

//todos
//if checkout is empty, check text to checkout if empty
//if not, display cart items
//show purchased tab if cart is empty
//connect button to modal
//link values for a post request