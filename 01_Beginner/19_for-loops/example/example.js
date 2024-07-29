for (let i = 0; i <= 2; i++) {
  console.log("Hello World");
}

// ------------------------

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// ---------------------------

for (let i = 1; i <= 20; i++) {
  if (i === 13) {
    break;
  }
  console.log(i);
}

// ----------------------------

for (let i = 1; i <= 20; i++) {
  if (i === 13) {
    continue;
  }
  console.log(i);
}

