/**
 * Calculate the correct number of council seats based on municipality population
 * According to Dutch municipal law (Gemeentewet)
 */
export function calculateSeats(inhabitants: number): number {
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
  return 45; // For municipalities with more than 200,000 inhabitants
}
