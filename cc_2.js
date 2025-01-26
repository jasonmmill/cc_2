// Task 1: Working with Arrays
let products = [ "iPod", "iPad", "iPhone", "AirPods", "Macbook"]
console.log(products)
// add product
products.push("Apple Watch")
console.log(products)
// remove product
let removed = products.pop()
console.log(removed)
console.log(products)

// Task 2: Accessing and Modifying Arrays
const scores = [ 93, 61, 45, 87, 76 ]
console.log(scores)
scores.splice(2,1,54)
console.log(scores)
let total = scores.reduce((sum, price) => sum + price)
average = total / scores.length
console.log(average)