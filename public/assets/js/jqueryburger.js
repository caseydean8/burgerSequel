$(function() {
    $(".devoured").on("click", function(event) {
        console.log("eat it!")
        var id = $(this).data("id");
        // Send the PUT request.
        $.ajax({
            type: 'PUT',
            url: "/api/burgers/" + id
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
        $.ajax({
            method: "DELETE",
            url: "/api/burgers/" + id
        }).then(
            function() {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});