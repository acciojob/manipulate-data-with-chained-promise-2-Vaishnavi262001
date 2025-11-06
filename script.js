//your JS code here. If required.
// your JS code here
function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

function manipulateArray() {
  // Step 1: Start immediately with [1, 2, 3, 4]
  delay(0, [1, 2, 3, 4])
    .then(arr => {
      // Step 2: After 1 second, filter even numbers
      const evens = arr.filter(num => num % 2 === 0);
      return delay(1000, evens);
    })
    .then(evens => {
      // Update DOM with filtered even numbers [2, 4]
      document.getElementById("output").textContent = evens.join(",");
      // Step 3: Multiply evens by 2 and delay 2 seconds more
      const doubled = evens.map(num => num * 2);
      return delay(2000, doubled);
    })
    .then(finalArr => {
      // Update DOM with doubled numbers [4, 8]
      document.getElementById("output").textContent = finalArr.join(",");
    })
    .catch(err => console.error("Error:", err));
}

// Run on page load
manipulateArray();
 