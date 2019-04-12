//STEP 02
alert("Welcome! Please view console in your browser.");
//STEP 03
var name = "Jacquelyn Wu"
  console.log(name)
var no1 = 6
  console.log(no1)
var no2= "7"
console.log(name + ' has ' + no1 + " oranges ")
console.log(no1 > no2)
console.log(no1 < no2)
var no3= 13
//STEP 04 math
console.log(no3 - no2)
console.log(no2 - 1)
console.log(12 - no1)
console.log(no1 + 0)
console.log(36 / no1)
//STEP 05 countries
var country = ["Japan", "Britain", "Italy", "France"]
console.log(country[0])
console.log(country.length)
//STEP 06 Current Time
var now = new Date()
now.getHours()
now.getMinutes()
now.getSeconds()
console.log("The current time is: " + now)
if (now.getHours == 11) {
  console.log(now)
} else{
  console.log("It is not 11 yet.")
}
//STEP 08 name
if(name.length - 1 == 9){
  console.log("My name is relatively short")
} else if (name.length - 1 == 14){
  console.log("My name is relatively long")
}else {
  console.log("My name is neither short nor long")
}
//temperature
var currentTemp = 43
var countryTemp = 45
function Convert(currentTemp){
  return (currentTemp - 32)*(5/9)
}
console.log("The current temperature in New York City is " + Convert(43) + " °C at " + now)
console.log("The current temperature in Tokyo is " +  Convert (45) + " °C at " + now)
//the loop

for (var i = 0; i < 8; i++){
  if (i < 7){
    var notes = document.write("Do Re Mi Fa So La Ti ")
  } else {
    document.write("We are back to do Do DO DOOOOO ")
    document.getElementById('text').style.color = "white";
  }
}
//math.random
