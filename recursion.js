const express = require("express")
const app = express();

function product(nums) {
    if (nums.length === 0) {
        return 1;
    }
    return nums[0] * product(nums.slice(1));
}

function longest(words) {
    if (words.length === 0) {
        return 0;
    }
    const currentLength = words[0].length;
    const remainingWordsLength = longest(words.slice(1));
    return Math.max(currentLength, remainingWordsLength);
}

function everyOther(string) {
    if (string.length <= 0) {
        return "";
    }
    return string[0] + everyOther(string.slice(2));
}

function isPalindrome(string) {
    if (string.length <= 1) {
        return true;
    }
    if (string[0] !== string[string.length - 1]) {
        return false;
    }
    return isPalindrome(string.slice(1, string.length - 1));
}

function findIndex(arr, val) {
    if (arr.length === 0)
        return -1;
    if (arr[0] === val)
        return 0;
    return findIndex(arr, val, 0 + 1);
}

function revString(word) {
    if (word.length === 0) {
        return "";
    }
    return revString(word.slice(1)) + word[0];
}

function gatherStrings(obj) {
    let result = [];
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            result.push(obj[key]);
        } else if (typeof obj[key] === 'object') {
            result = result.concat(gatherStrings(obj[key]));
        }
    }
    return result;
    
}

app.listen(3000, function() {
    console.log("server is on 3000")
})