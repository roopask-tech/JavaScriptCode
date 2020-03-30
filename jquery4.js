function myFunction() {
    var x, text;
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("name").value;
  
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x.length < 16 || x.length > 3) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }
        
