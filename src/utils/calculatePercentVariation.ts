export function calculatePercentVariation(prevNum: number, nextNum: number) {
  const variation = ((nextNum - prevNum) / prevNum) * 100;
  // return variation.toFixed(fixValue);
  return variation;
}
