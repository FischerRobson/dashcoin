export function calculatePercentVariation(numA: number, numB: number) {
  const variation = ((numA - numB) / numB) * 100;
  // return variation.toFixed(fixValue);
  return variation;
}
