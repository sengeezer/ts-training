// Anagram: rearranged letters of one word form another
//
// instead of checking all permutations, simply determine if both have the same characters

function areAnagrams(s1: string, s2: string): boolean {
  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');
  return s1 === s2;
}

// more efficient:
function areAGs(s1: string, s2: string): boolean {
  const charCount = new Map<string, number>();
  for (let char of s1.split('')) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let char of s2.split('')) {
    if (!charCount.has(char)) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
  }

  return Array.from(charCount.values()).every(val => val === 0);
}