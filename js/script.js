function kiloweightConvert(value) {
    document.getElementById("Pounds").innerHTML =
      value * 2.2046;
    document.getElementById("Ounces").innerHTML =
      value * 35.274;
    document.getElementById("Grams").innerHTML =
      value * 1000;
}