// Helper script to update seats in municipalities.ts based on inhabitants

const calculateSeats = (inhabitants: number): number => {
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
};

// Test the function
console.log('Testing calculateSeats function:');
console.log('3000 inhabitants:', calculateSeats(3000), '(should be 9)');
console.log('25327 inhabitants:', calculateSeats(25327), '(should be 21)'); // Aa en Hunze
console.log('31857 inhabitants:', calculateSeats(31857), '(should be 23)'); // Aalsmeer
console.log('109896 inhabitants:', calculateSeats(109896), '(should be 39)'); // Alkmaar
console.log('921402 inhabitants:', calculateSeats(921402), '(should be 45)'); // Amsterdam

export { calculateSeats };
