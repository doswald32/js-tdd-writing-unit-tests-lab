export function isPalindrome(word) {
    let match = [];
    for (const char of word) {
        match.unshift(char);
    }
    if (match === word) {
        return true;
    } else {
        return false;
    }
}
