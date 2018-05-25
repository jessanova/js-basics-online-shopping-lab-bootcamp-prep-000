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
  //console.log(x)
  var itemPrice=`${Math.floor(Math.random()*100)}`
  //console.log(y)
  cart.push({itemName,itemPrice})
  console.log(cart)
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
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
