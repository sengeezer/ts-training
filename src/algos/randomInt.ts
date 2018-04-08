// random integers in a given range
function randomInt(start: number, before: number): number {
  return start + Math.floor(Math.random() * before - start);
}