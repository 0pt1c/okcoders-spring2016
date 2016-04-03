function my_max(num_array) {
    var max = 0;
    for (var i=0; i < num_array.length; i++) {
        if (num_array[i] > max) {
            max = num_array[i];
        };
    };
    return max;
};

function vowel_count(string) {
    var num_vowels = 0;
    for (var i=0; i < string.length; i++) {
        letter = string[i].toLowerCase();
        if isVowel(letter) {
            num_vowels++;
        };
    };
    return num_vowels;
};

function isVowel(x) {  return /[aeiouAEIOU]/.test(x); };
