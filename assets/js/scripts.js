$(document).ready(function() {
    


$('#orderButton').click(function() {
    var pizzaSize = $(".size option:selected").val();
    var pizzaTopping = $(".toppings option:selected").val();
    var pizzaCrust = $(".crust option:selected").val();
    var total = parseInt(pizzaSize) + parseInt(pizzaTopping) + parseInt(pizzaCrust);
    var order = 1;
    var grandTotal = 0;

    $("#").show();
    $("#addBtn").show();
    $("#orderButton").hide();

    $("#sizeData").html($(".size option:selected").text() + " - " + PizzaSize);
    $("#toppingsData").html($(".toppings option:selected").text() + " - " + pizzaToppings);
    $("#crustData").html($(".crust option:selected").text() + " - " + pizzaCrust);
    $("#totalAmount").html(total);

    function Pizza(size, toppings, crust, total, orderNo) {
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      this.total = total;
      this.orderNo = orderNo;
    }

    
}