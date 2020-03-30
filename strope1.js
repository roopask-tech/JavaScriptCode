function isPalindrome(str) {
    if (str.trim().length > 0) {
        if (str.length == 1) {
            return true;
        } else {
            for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
                if (str[i] != str[j]) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}


let idStr = document.querySelector("#idStr");
let res = document.querySelector("#result");
idStr.addEventListener('keyup', (event) => {
    let str = event.target.value;
    let data = ""
    if (event.key === "Enter") {
        if (isPalindrome(str.toLowerCase())) {
            data = `<div class='text-success'>Palindrome</div>`;
        } else {
            data = `<div class='text-danger'>Not a Palindrome</div>`;
        }
        res.innerHTML = data;

    }
    if (str.trim().length == 0) {
        res.innerHTML = ""
    }
})


/////end for palindrome////


function printAllPossibleWord(string) {
    var result = [];
    if (string.length === 1) {
        result.push(string)
        return result;
    }

    for (var i = 0; i < string.length; i++) {
        var char1 = string[i];
        var otherChar = string.substring(0, i) + string.substring(i + 1);
        var otherPermutations = printAllPossibleWord(otherChar);
        for (var j = 0; j < string.length; j++) {
            result.push(char1 + otherPermutations[j]);

        }

    }
    return result;
}

let idStr2 = document.getElementById("#idStr2");
let result2 = document.getElementById("#result2");


idStr2.addEventListener('keyup', (event2) => {
    let str1 = event2.target.value;
    let data = ""
    var permutation = printAllPossibleWord(str1).filter((el, idx, self) => (self.indexOf(el) === idx));
    if (event2.key === "Enter") {
        data = `<div class = 'text-secondary'>${element}</div>`;
        // data += `<p> ${element}</p>`;
        result2.innerHTML = data;
    }

})