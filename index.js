var cart = [];
test()
function test(){
  var q = {'fname':'bob','lname':'smith'}
  var t = [q]
  console.log({'fname':'bob','lname':'smith'})
  console.log(q)
  console.log(`${q}`)
  console.log(t)
  console.log(`${t}`)
  console.log(t[0])
  console.log(`${t[0]}`)
  console.log(t[0].fname)
  console.log(`${t[0].fname}`)
}

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
  var itemPrice=Math.floor(Math.random()*100)
  cart.push({itemName,itemPrice})
  console.log(cart)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length===0){return "Your shopping cart is empty."}
  var s = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}` 
  //var i=1
  for(var i=1;i<cart.length-1;i++){
    s+=`, ${cart[i].itemName} at $${cart[i].itemPrice}` 
  }
  if(cart.length>1){s+=`, and ${cart[i].itemName} at $${cart[i].itemPrice}`}
  s+=`.`
  
  return s
  
}

function total() {
  var x = 0
  cart.forEach(function(){x+=})
  return x
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
