function my_max(num_array) {
    var max = 0;
    for (var i=0; i < num_array.length; i++) {
        if (num_array[i] > max) {
            max = num_array[i];
        }
    }
    return max;
}

function vowel_count(str) {
    var num_vowels = 0;
    for (var i=0; i < str.length; i++) {
        var letter = str[i].toLowerCase();
        if (isVowel(letter)) {
            num_vowels++;
        }
    }
    return num_vowels;
}

function isVowel(x) {
    return /[aeiouAEIOU]/.test(x);
}

function reverse(str) {
    var rev_str = '';
    for (var i = str.length - 1; i >= 0; i--) {
        rev_str += str[i];
    }
    return rev_str;
}
