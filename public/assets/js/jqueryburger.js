$(function() {
    $(".devoured").on("click", function(event) {
        console.log("eat it!")
        var id = $(this).data("id");
        var devoured = $(this).data("isDevoured");

        var nowDevoured = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            // data: nowDevoured
        }).then(
            function() {
                console.log("changed devoured ");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});