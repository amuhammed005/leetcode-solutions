/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = String(x)
    if(x.split("").reverse().join("") === x){
        return true
    }
    return false
};