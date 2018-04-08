// returns first repeat of item
// <T> ensures same type in and out
function repeatedItem<T>(array: T[]): T {
  const set = new Set<T>();
  for (const item of array) {
    if (set.has(item)) {
      return item;
    }

    set.add(item);
  }
  throw new Error('No item repeated.');
}