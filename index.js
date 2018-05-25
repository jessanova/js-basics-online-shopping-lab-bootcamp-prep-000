var cart = [];
addToCart("test")

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  console.log(item)
  var itemName=`${item}`
  var itemPrice=`${Math.floor(Math.random()*100)}`
  cart.push({itemName,itemPrice})
  console.log(cart)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var s = "In your cart, you have "
  for(var i=0;i<cart.length;i++){
    s+=`${cart[1].itemName} at ${cart[1].itemName} 
    
  }
  cart
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
