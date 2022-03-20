$(document).ready(function() {
    
    var size = $("#size").val();
    var pizza = $("#pizza").val();
    var topping= $("#topping").val();

    $("#blanks form").submit(function(event) {
        var blanks = ["size", "crust", "topping"];


        $("#order").show();

        event.preventDefault();



    });


});