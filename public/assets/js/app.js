$(function() {
    $("label").on("click", function() {
        var newBurger = {
            name: $(this).data("burger"),
            price: $(this).data("price")
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        })
    })

    $(".checkout").on("click", function() {
        var burgerArr = [];
        $(".burger-checkout").each(function() {
            burgerArr.push({
                id: $(this).data("id"),
                devoured: true
            });
        })
        var counter = 0;
        $.each(burgerArr, function (id, arr) {
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: arr
            }).then(function() {
                counter++;
                if (counter === burgerArr.length) {
                    location.reload();
                }
            })
        });
    })
})