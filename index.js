var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = generateCartItem(item)
  getCart().push(item)
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription()
}

function total() {
  var sum = sumUpPrices()
  return sum
}

function removeFromCart(itemName) {
  var itemToRemove = searchCartForItemToRemove(itemName)
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove()
}

function placeOrder(cardNumber) {
  if (arguments[0] == undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var sumToCharge = total()
    setCart([])
    return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
  }
}

// helper functions
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCartItem(itemName) {
  return {
    itemName:itemName,
    itemPrice:getRandomInt(1, 100)
  }
}

function generateCartDescription() {
  var cartDescription = 'In your cart, you have '
  if ( getCart().length >= 1 ) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if ( getCart().length >= 2 ) {
    var middleCartItemsDescription = ''
    for (var i=1; i<getCart().length -1; i++) {
      middleCartItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartDescription += `${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }

  return `${cartDescription}.`
}

function searchCartForItemToRemove(itemName) {
  var searchResult
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  return searchResult
}

function sumUpPrices() {
  var sum = 0
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

function notifyUserThereIsNoItemToRemove() {
  return 'That item is not in your cart.'
}

function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove)
  //Array.prototype.splice()
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  getCart().splice(indexOfItemToRemove,1)
}

//My Solution

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemObj = {};
  let price = Math.floor(Math.random() * 100) + 1;
  itemObj.itemName = item;
  itemObj.itemPrice = price;
  cart.push(itemObj);
  return `${item} has been added to your cart.`
}

function viewCart() {
  switch (true) {
    case cart.length === 0:
      return `Your shopping cart is empty.`;
      break;
    case cart.length === 1:
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
      break;
    case cart.length === 2:
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
      break;
    case (cart.length > 2):
      let sentence = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, `;
      for (let i = 2; i < cart.length; i++){
        if(i === cart.length - 1){
          sentence += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
        } else {
          sentence += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
        }
      }

      return sentence;
      break;
  }
}

function total() {
  let sum = 0
  for (let i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice;
  }
  return sum
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if(cart[i].itemName === item){
      return cart.splice(i,1);
    }
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    let placedOrderResponse =  `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
    return placedOrderResponse;
  }
}
