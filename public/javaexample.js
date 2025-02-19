
var foodItem1= 300
var foodItem2= 200

var total= foodItem1+foodItem2

console.log(total)

var foodItems = ["Soda","Fries","Water","Shawarma","me (if you on sum freaky shii)","Chapati"]
var foodPrices= [70,200,50,350,1000000,200]

//if statements
var storedpassword="2345"
var storedusername="sean"

var typedpassword="2345"
var typedusername="sean"

//check username
if(typedusername == storedusername&& typedpassword == storedpassword ){
    console.log("Logged in")
} else {
    console.log("Try again")
}

//check password
// if(typedpassword == storedpassword){
//     console.log("Logged in")
// } else {
//     console.log("Try again")
// }

//Loops
for (i=0; i<=5; i++ ){
    console.log(i)
}
//loop
for(item in foodItems){
    console.log(foodItems[item])
}
//functions

function calculateTotal(){  //declare function
    var foodItem1= 300
var foodItem2= 200
var total= foodItem1+foodItem2

console.log(total)
}
calculateTotal()//call function

function calculateOrder(foodItem1,foodItem2){
var total= foodItem1+foodItem2
return total
}
console.log(calculateOrder(600, 20))