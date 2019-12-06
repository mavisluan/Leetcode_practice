/*
Leetcode 824
A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.
We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:
    If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
    For example, the word 'apple' becomes 'applema'.

    If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
    For example, the word "goat" becomes "oatgma".

    Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S to Goat Latin.
 */
// Time: O(n) Space: O(n^2) -- space taken by adding "a"s
var toGoatLatin = function (S) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const words = S.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (!vowels.has(words[i][0].toLowerCase())) {
            words[i] = words[i].substring(1) + words[i][0];
        }
        words[i] += "ma";
        let addon = ("a").repeat(i + 1);
        words[i] += addon;
    }

    return words.join(" ");
};

console.log('toGoatLatin', toGoatLatin("I speak Goat Latin") === "Imaa peaksmaaa oatGmaaaa atinLmaaaaa");
console.log('toGoatLatin', toGoatLatin("The quick brown fox jumped over the lazy dog") === "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa");

