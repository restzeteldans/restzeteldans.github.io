// This script reads the municipalities.ts file and corrects the number of seats based on population
const fs = require('fs');

// Function to calculate correct number of seats based on population
function calculateSeats(inhabitants) {
  if (inhabitants <= 3000) return 9;
  if (inhabitants <= 6000) return 11;
  if (inhabitants <= 10000) return 13;
  if (inhabitants <= 15000) return 15;
  if (inhabitants <= 20000) return 17;
  if (inhabitants <= 25000) return 19;
  if (inhabitants <= 30000) return 21;
  if (inhabitants <= 35000) return 23;
  if (inhabitants <= 40000) return 25;
  if (inhabitants <= 45000) return 27;
  if (inhabitants <= 50000) return 29;
  if (inhabitants <= 60000) return 31;
  if (inhabitants <= 70000) return 33;
  if (inhabitants <= 80000) return 35;
  if (inhabitants <= 100000) return 37;
  if (inhabitants <= 200000) return 39;
  return 45;
}

// Read the file
const content = fs.readFileSync('/data/municipalities.ts', 'utf-8');

// Replace seats values with correct ones based on inhabitants
// This regex matches: inhabitants: NUMBER, seats: NUMBER
const updatedContent = content.replace(
  /inhabitants: (\d+), seats: \d+/g,
  (match, inhabitants) => {
    const correctSeats = calculateSeats(parseInt(inhabitants));
    return `inhabitants: ${inhabitants}, seats: ${correctSeats}`;
  }
);

// Write the updated content back
fs.writeFileSync('/data/municipalities.ts', updatedContent, 'utf-8');

console.log('Seats updated successfully!');
