$(function() {
    //possibly change this into a button
    //would like to make this into a select checked and move all checked into checkout
    $("label").on("click", function() {
        var newBurger = {
            name: $(this).data("burger"),
            price: $(this).data("price")
        }
        //add new burger
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
                id: $(this).data("id"),
                devoured: true
            });
        })
        //ajax is async so need a counter to match array length to determine when ajax calls are complete
        var counter = 0;
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