let x = "Pizza"
let y = "0"
let z = ""

x = Number(x); // NaN (Not a Number)
console.log(`x: ${x}, type: ${typeof x}`);

y = Number(y); // 0
console.log(`y: ${y}, type: ${typeof y}`);

z = Number(z); // 0
console.log(`z: ${z}, type: ${typeof z}`);