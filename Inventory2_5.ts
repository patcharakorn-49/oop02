let inventory: [string, number, number][] = [];

inventory.push(["Laptop", 999.99, 10]);
inventory.push(["Mouse", 19.99, 50]);
inventory.push(["Keyboard", 49.99, 30]);

for (const [name, price, qty] of inventory) {
console.log(`Product: ${name}, Price: $${price}, Quantity: ${qty}`);
}