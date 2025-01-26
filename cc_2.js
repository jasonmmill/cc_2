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

// Task 3: Working with Objects
let employee = {
    name: "Jake Hebrank",
    age: 22,
    department: "Marketing",
    isActive: true
}
employee.department = "Sales"
employee.position = "Specialist"
console.log(employee)

// Task 4: Array of Objects
let customers = [ 
    { name: "Hunter Junazski", email: "junazski1404@gmail.com", purchaseAmount: 200}, 
    { name: "Aidan O'Keefe", email: "okeefe@yahoo.com", purchaseAmount: 250},
    { name: "Matthew Delatorre", email: "mattdela05@usf.edu", purchaseAmount: 300}
]
customers.push({name: "Zach Pepper", email: "zpeps2024@gmail.com", purchaseAmount: 400})
console.log(customers)

// Task 5: Object Methods
let order = {
    orderId: 123,
    customerName: "Eric Torres",
    amount: 50
}
console.log(order)
let calculateTax = order.amount + (order.amount * 0.1)
console.log(calculateTax)