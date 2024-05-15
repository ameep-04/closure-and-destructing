let order = {
    orderId: "123456",
    productName:"Laptop",
    quantity:2
};


console.log("Without Destructing:");
console.log("Order Id:",order.orderId);
console.log("Product Name:",order.productName);
console.log("Quantity:",order.quantity);

console.log("\nWith Destructing:");
let{orderId,productName,quantity} = order;
console.log("Order Id:",orderId);
console.log("Product Name:",productName);
console.log("Quantity:",quantity);