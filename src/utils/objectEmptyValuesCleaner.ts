export function objectEmptyValuesCleaner(obj: Object) {
  const asArray = Object.entries(obj);
  const filtered = asArray.filter(([key, value]) => value);
  const cleaned = Object.fromEntries(filtered);

  return cleaned;
}
