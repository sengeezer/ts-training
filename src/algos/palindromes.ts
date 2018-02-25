// e.g. abba, madam, toot

function isPalindrome(str: string): boolean {
  const reversed = str.split('').reverse().join('');
  return reversed === str;
}

// is any permutation a palindrome?
// i.e. can all but one character be matched?

function anyPerm(str: string): boolean {
  const unmatched = new Set<string>();
  str.split('').forEach(char => {
    if (unmatched.has(char)) {
      unmatched.delete(char);
    } else {
      unmatched.add(char);
    }
  });

  return unmatched.size <= 1;
}