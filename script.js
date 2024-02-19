function calculateProduct() {
    // Get the values from the input boxes
    var g = document.getElementById("gram").value;
    var r = document.getElementById("rate").value;
    var m = document.getElementById("making").value;
    var t = document.getElementById("tax").value;
  
    // Convert the values to numbers
    var w = parseFloat(g);
    var rte = parseFloat(r);
    var make = parseFloat(m);
    var tex = parseFloat(t);
  
    // Check if both inputs are valid numbers
    if (!isNaN(w) && !isNaN(rte)) {
      // Calculate the product
      var p =w * rte/10;
      var pm =(p*make/100)+p;
      var product =(pm*tex/100)+pm;
      // Display the product in the result h1
      document.getElementById("result").textContent = "Total Prize:  " + product;
    } else {
      // Display error message if inputs are not valid numbers
      document.getElementById("result").textContent = "Please enter valid numbers";
    }
  }
  