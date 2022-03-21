$(document).ready(function() {
    

  $('.btn.orderbutton').click(function() {
      var pizzaSize = $(".size option:selected").val();
      var pizzaTopping = $(".topping option:selected").val();
      var pizzaCrust = $(".crust option:selected").val();
      var total = parseInt(pizzaSize) + parseInt(pizzaTopping) + parseInt(pizzaCrust);
      var order = 1;
      var totalAmount = 0;

      $("table").show();
      $(".add-pizza").show();
      $(".checkout").show();
      $(".orderbutton").hide();

      $("#size").html($(".size option:selected").text() + " - " + pizzaSize);
      $("#topping").html($(".topping option:selected").text() + " - " + pizzaTopping);
      $("#crust").html($(".crust option:selected").text() + " - " + pizzaCrust);
      $("#total").html(total);

      function Pizza(size, topping, crust, total, orderNo) {
        this.size = size;
        this.topping = topping;
        this.crust = crust;
        this.total = total;
        this.orderNo = orderNo;
      }


      $('.btn.add-pizza').click(function() {
          var pizzaSize = $(".size option:selected").val();
          var pizzaTopping = $(".topping option:selected").val();
          var pizzaCrust = $(".crust option:selected").val();
          var total = parseInt(pizzaSize) + parseInt(pizzaTopping) + parseInt(pizzaCrust);
          order = order + 1;
          totalAmount = totalAmount + total;
    
    
          var newPizza = new Pizza(pizzaSize, pizzaTopping, pizzaCrust, total, order);
    
          var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="topping">' + $(".topping option:selected").text() + " - " + newPizza.topping + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'
    
          $(".pizzaorder").append(newRow);
        });

        $(".btn.checkout").click(function() {
          $(".btn.add-pizza").hide();
          $(".btn.checkout").hide();
          $(".totalalert").show();
          $(".totalalert .fs-3").show();
          $(".totalalert .fs-4 .fs-5").hide();
          $(".location").show();
          $(".yesbutton").show();
          $(".nobutton").show();
          $(".deliverybutton").hide();
          totalAmount = totalAmount + total;

          $(".totalalert .fs-3 span").html(totalAmount);
        });


        $(".yesbutton").click(function() {
          $(".totalalert .fs-4").show();
          $(".yesbutton").hide();
          $(".nobutton").hide();
          $(".location").hide()
          $(".totalalert .fs-5").show();
          $(".deliverybutton").show();
          $(".totalalert .fs-4 span").html(totalAmount + 500);
        });

        $(".nobutton").click(function() {
          $(".totalalert .fs-3").show();
          $(".yesbutton").hide();
          $(".nobutton").hide();
          $(".location").hide();
          $(".totalalert .fs-4").hide();
          $(".totalalert .fs-5").hide();
          $(".totalalert .fs-3 span").show();
        });

        $(".deliverybutton").click(function() {
          var location = $(".totalalert.location input").val();
          $(".totalalert .fs-5").show();
          $(".totalalert .location").hide();
          $(".totalalert .fs-5 span").html(location);
        });
    

    });
  
 });

