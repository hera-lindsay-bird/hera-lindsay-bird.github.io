let products = {
  turtleJuice: {
    stock: 4,
    price: 9,
  },

  frogEggs: {
    stock: 20,
    price: 3,
  },

  wormBasket: {
    stock: 6,
    price: 7.5,
  },

  honeyWasp: {
    stock: 1,
    price: 1.5,
  },
}

function displayProducts() {
  document.getElementById('turtleJuice').innerHTML =
    'Turtle Juice:' + products.turtleJuice.stock

  document.getElementById('frogEggs').innerHTML =
    'Frog Eggs:' + products.frogEggs.stock

  document.getElementById('wormBasket').innerHTML =
    'Worm Basket:' + products.wormBasket.stock

  document.getElementById('honeyWasp').innerHTML =
    'Honey Fried Wasp:' + products.honeyWasp.stock
}

displayProducts()

///CUSTOMERS////

let customer = {
  newOrder: [],
}

let minOrderSize = 1
let maxOrderSize = 5

let order = []

function generateCustomerOrder() {
  let orderSize = getRandomInt(minOrderSize, maxOrderSize)

  let newOrder = []

  let productNames = Object.keys(products)

  for (let i = 0; i <= orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1)
    let productName = productNames[productIndex]
    newOrder.push(productName)
  }

  customer.order = newOrder
  displayCustomerOrder()
}
/// get a random size forr the order in a range 1-5
///  make a new array of the things they're ordering
///assign the new order to the customer object
///display the customer order
//display everything

/// UTIL ///

function fillOrder() {
  //add the sale total to our Cash
  //clear the customer order
  //display the new totals
  let saleTotal = 0

  for (let i = 0; i < customer.order.length; i++) {
    let productName = customer.order[i]

    if (products[productName].stock > 0) {
      products[productName].stock
      saleTotal += products[productName].price
    } else {
      alert('NO ' + productName + ' FOR YOU, YOUNG WHIPPERNSAPPER!')
    }
  }

  cash += saleTotal
  customer.order = []
  displayProducts()
  displayCash()
  displayCustomerOrder()
}

document.getElementById('customerButton').onclick = generateCustomerOrder

///TRANSACTIONS///

let cash = 0
function displayCash() {
  document.getElementById('cash').innerHTML = 'Cash:' + cash
}

displayCash()

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

generateCustomerOrder()

function displayCustomerOrder() {
  document.getElementById('customerOrder').innerHTML =
    'Customer order: ' + customer.order
}

document.getElementById('fillOrder').onclick = fillOrder
